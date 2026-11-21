import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppEnvironment } from 'app.environment';
import {
  FiatCurrency,
  StripeDepositTransaction,
  StripeFiatBalance,
  User,
} from 'entities';
import {
  ENUM_STRIPE_DEPOSIT_STATUS,
  ENUM_STRIPE_PAYMENT_INTENT_STATUS,
} from 'enums';
import Stripe from 'stripe';
import { DeepPartial, Repository } from 'typeorm';

import { WalletService } from './wallet.service';

@Injectable()
export class StripeService {
  private stripe: any;

  constructor(
    private readonly appEnvironment: AppEnvironment,
    private readonly walletSerivce: WalletService,
    @InjectRepository(StripeDepositTransaction)
    private StripeDepositTransactionRepository: Repository<StripeDepositTransaction>,
    @InjectRepository(StripeFiatBalance)
    private StripeFiatBalanceRepository: Repository<StripeFiatBalance>,
    @InjectRepository(FiatCurrency)
    private FiatCurrencyRepository: Repository<FiatCurrency>,
  ) {
    this.stripe = new Stripe(this.appEnvironment.stripeSecretKey);
  }

  async getFeeForPayment(payment_id: string) {
    const paymentIntent = await this.stripe.paymentIntents.retrieve(
      payment_id,
      {
        expand: ['latest_charge.balance_transaction'],
      },
    );

    const feeDetails =
      paymentIntent.latest_charge.balance_transaction.fee_details;
    return Number(feeDetails[0].amount);
  }

  async createPaymentIntent(user: User, amount: number, currency: string) {
    const fiat = await this.FiatCurrencyRepository.findOneBy({
      symbol: currency,
    });

    const intent = await this.stripe.paymentIntents.create({
      amount: amount * Math.pow(10, fiat.iso_decimals),
      currency,
      automatic_payment_methods: { enabled: true },
    });

    //  Get payment id
    const payment_id = intent.client_secret.split('_secret_')[0];

    if (!fiat) {
      throw new BadRequestException('Stripe: create payment intent', {
        description: 'Invalid currency',
      });
    }

    //  save a new stripe deposit transaction

    const new_stripe_deposit_tx_config: DeepPartial<StripeDepositTransaction> =
      {
        user,
        fiat,
        payment_id,
        amount,
        amount_usd: amount * fiat.price,
      };

    await this.StripeDepositTransactionRepository.save(
      this.StripeDepositTransactionRepository.create(
        new_stripe_deposit_tx_config,
      ),
    );

    return { client_secret: intent.client_secret };
  }

  async updatePaymentStatus(
    payment_id: string,
    status: ENUM_STRIPE_PAYMENT_INTENT_STATUS,
    fee?: number | undefined,
  ) {
    const tx = await this.StripeDepositTransactionRepository.findOne({
      where: {
        payment_id,
      },
      relations: ['fiat'],
    });

    if (status === ENUM_STRIPE_PAYMENT_INTENT_STATUS.Succeeded) {
      tx.status = ENUM_STRIPE_DEPOSIT_STATUS.Complete;
    } else if (
      status === ENUM_STRIPE_PAYMENT_INTENT_STATUS.Requires_Payment_Method &&
      tx.payment_intent_status !=
        ENUM_STRIPE_PAYMENT_INTENT_STATUS.Requires_Payment_Method
    ) {
      tx.status = ENUM_STRIPE_DEPOSIT_STATUS.Failed;
    }
    tx.payment_intent_status = status;
    tx.fee = fee / Math.pow(10, tx.fiat.iso_decimals) ?? tx.fee;
    tx.fee_usd =
      (fee * tx.fiat.price) / Math.pow(10, tx.fiat.iso_decimals) ?? tx.fee_usd;
    await tx.save();

    return await this.StripeDepositTransactionRepository.findOne({
      where: {
        payment_id,
      },
      relations: ['fiat', 'user'],
    });
  }

  async updateFiatBalance(user_id: string, fiat_id: string, amount: number) {
    await this.StripeFiatBalanceRepository.createQueryBuilder()
      .update(StripeFiatBalance)
      .set({
        balance: () =>
          amount > 0 ? `balance + ${amount}` : `balance - ${-amount}`,
      })
      .where('user_id = :user_id', { user_id })
      .andWhere('fiat_id = :fiat_id', { fiat_id })
      .execute();
  }

  async stripeWebhook(event: any) {
    // Handle the event
    switch (event.type) {
      case 'payment_intent.canceled':
        const paymentIntentCanceled = event.data.object;
        // Then define and call a function to handle the event payment_intent.canceled
        break;
      case 'payment_intent.created':
        const paymentIntentCreated = event.data.object;
        // Then define and call a function to handle the event payment_intent.created
        break;
      case 'payment_intent.payment_failed':
        const paymentIntentPaymentFailed = event.data.object;
        await this.updatePaymentStatus(
          paymentIntentPaymentFailed.id,
          paymentIntentPaymentFailed.status,
        );
        // Then define and call a function to handle the event payment_intent.payment_failed
        break;
      case 'payment_intent.processing':
        const paymentIntentProcessing = event.data.object;
        await this.updatePaymentStatus(
          paymentIntentProcessing.id,
          paymentIntentProcessing.status,
        );
        // Then define and call a function to handle the event payment_intent.processing
        break;
      case 'payment_intent.requires_action':
        const paymentIntentRequiresAction = event.data.object;
        // Then define and call a function to handle the event payment_intent.requires_action
        break;
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        const fee = await this.getFeeForPayment(paymentIntentSucceeded.id);
        const tx = await this.updatePaymentStatus(
          paymentIntentSucceeded.id,
          paymentIntentSucceeded.status,
          fee,
        );

        //  Add deposit pool
        await this.walletSerivce.updateBonusPool(tx.user, tx.amount_usd);
        //  Update fiat balance
        await this.updateFiatBalance(tx.user.id, tx.fiat.id, tx.amount);

        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    // Return a response to acknowledge receipt of the event
    return { received: true };
  }
}
