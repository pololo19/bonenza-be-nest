import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { disabledWithdrawError } from 'errors';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { StripeService } from 'modules/wallet/stripe.service';
import { WalletService } from 'modules/wallet/wallet.service';
import { WalletBalanceService } from 'modules/wallet/wallet-balance.service';
import { WalletDepositService } from 'modules/wallet/wallet-deposit.service';
import { WalletRolloverService } from 'modules/wallet/wallet-rollover.service';
import { WalletSwapService } from 'modules/wallet/wallet-swap.service';
import { WalletTransactionService } from 'modules/wallet/wallet-transaction.service';
import { WalletWithdrawService } from 'modules/wallet/wallet-withdraw.service';

import {
  favoriteDto,
  rolloverDto,
  sendTipDto,
  stripePaymentIntentDto,
  swapDto,
  transactionDto,
  twoPricesDto,
  withdrawDto,
  withdrawInfoDto,
} from './dtos';

@ApiTags('Wallet')
@Controller('wallet')
export class WalletController {
  constructor(
    private readonly walletService: WalletService,
    private readonly stripeService: StripeService,
    private readonly walletBalanceService: WalletBalanceService,
    private readonly walletDepositService: WalletDepositService,
    private readonly walletSwapService: WalletSwapService,
    private readonly walletWithdrawService: WalletWithdrawService,
    private readonly walletRolloverService: WalletRolloverService,
    private readonly walletTransactionService: WalletTransactionService,
  ) {}

  // Get wallet balance(crypto) by user id
  @ApiOperation({
    summary: 'Get wallet balance',
    description: 'Limit: 60 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('get-balance')
  @UseGuards(JwtAuthGuard)
  async getBalance(@Request() req: any) {
    const userCryptoBalance =
      await this.walletBalanceService.getBalanceByUserId(req.user);
    return userCryptoBalance;
  }

  @ApiOperation({
    summary: 'Get wallet information',
    description: 'Limit: 60 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('get-wallet-info')
  @UseGuards(JwtAuthGuard)
  async getWalletInfo(@Request() req: any) {
    const [
      wallets,
      balances,
      networks,
      symbols,
      currencies,
      fiatSymbols,
      depositTime,
      lockedUSDT,
    ] = await Promise.all([
      this.walletBalanceService.getWallets(req.user.id),
      this.walletBalanceService.getBalanceByUserId(req.user),
      this.walletBalanceService.getNetworks(),
      this.walletBalanceService.getSymbols(req.user.id),
      this.walletBalanceService.getCurrency(),
      this.walletBalanceService.getFiatSymbols(req.user.id),
      this.walletDepositService.getDepositTimesForThisWeek(req.user),
      this.walletBalanceService.getUSDTOfBonusPool(req.user),
    ]);
    return {
      wallets,
      balances,
      networks,
      symbols,
      currency: currencies,
      fiatSymbols,
      depositTime,
      lockedUSDT: lockedUSDT.locked_amount,
    };
  }

  @ApiOperation({
    summary: 'Get swap prices',
    description: 'Limit: 30 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('swap/prices')
  @UseGuards(JwtAuthGuard)
  async getTwoPricesForSwap(@Query() req: twoPricesDto) {
    const result = await this.walletSwapService.getTwoPricesForSwap(
      req.from,
      req.to,
    );
    return {
      from: req.from,
      fromPrice: result.from_price,
      to: req.to,
      toPrice: result.to_price,
    };
  }

  @ApiOperation({
    summary: 'Swap tokens',
    description: 'Limit: 30 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('swap')
  @UseGuards(JwtAuthGuard)
  async swapCrypto(@Request() req: any, @Body() body: swapDto) {
    const { from, to, amount } = body;

    const swap_amount = await this.walletSwapService.swapWithTwoCryptos(
      req.user,
      from,
      to,
      amount,
    );

    return {
      swap_amount,
    };
  }

  @ApiOperation({
    summary: 'Withdraw funds',
    description: 'Limit: 30 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('withdraw')
  @UseGuards(JwtAuthGuard)
  async withdrawCrypto(@Request() req: any, @Body() body: withdrawDto) {
    const { symbol_id, network_id, withdraw_address, withdraw_amount } = body;

    const res = await this.walletWithdrawService.withdrawCrypto(
      req.user,
      symbol_id,
      network_id,
      withdraw_address,
      withdraw_amount,
    );

    return res;
  }

  @ApiOperation({
    summary: 'Send tip to other user',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('tip')
  @UseGuards(JwtAuthGuard)
  async sendTip(@Request() req: any, @Body() body: sendTipDto) {
    const { symbol_id, receiver_id, amount } = body;
    const user = req.user;
    if (user.disabled_withdraw) {
      throw new HttpException(
        disabledWithdrawError.error,
        disabledWithdrawError.code,
      );
    }
    const res = await this.walletWithdrawService.sendTip(
      req.user.id,
      receiver_id,
      symbol_id,
      amount,
    );

    return res;
  }

  @ApiOperation({
    summary: 'Get withdraw information',
    description: 'Limit: 30 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('withdraw-info')
  @UseGuards(JwtAuthGuard)
  async withdrawalInfo(@Request() req: any, @Query() query: withdrawInfoDto) {
    const { symbol_id } = query;
    return await this.walletWithdrawService.getAvailableWithdrawalInfoByUserIdAndCurrencyId(
      req.user.id,
      symbol_id,
    );
  }

  @ApiOperation({
    summary: 'Get transaction list',
    description: 'Limit: 60 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('transaction')
  @UseGuards(JwtAuthGuard)
  async getTransaction(@Query() query: transactionDto, @Request() req: any) {
    const { type, symbol_id, start_date, end_date, page, page_size, status } =
      query;

    return await this.walletTransactionService.getTransaction(
      req.user,
      type,
      symbol_id,
      start_date,
      end_date,
      page,
      page_size,
      status,
    );
  }

  @ApiOperation({
    summary: 'Get the deposit time for this week',
    description: 'Limit: 30 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('get-deposit-time-for-this-week')
  @UseGuards(JwtAuthGuard)
  async getDepositTimesForThisWeek(@Request() req: any) {
    const times = await this.walletService.getDepositTimesForThisWeek(req.user);
    return { times };
  }

  @Get('rollover')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getRollover(@Request() req: any, @Query() query: rolloverDto) {
    const { status, page, page_size } = query;
    return await this.walletRolloverService.getRollOver(
      req.user,
      status,
      page,
      page_size,
    );
  }

  @Get('init-currency')
  async initCurrency() {
    const [fiatSymbols, symbols] = await Promise.all([
      this.walletBalanceService.getFiatSymbols(),
      this.walletBalanceService.getSymbols(),
    ]);
    return {
      fiatSymbols,
      symbols,
    };
  }

  @Get('claim')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getClaim(@Request() req: any) {
    return await this.walletService.getClaim(req.user);
  }

  @Post('claim')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async tryClaim(@Request() req: any) {
    return await this.walletService.tryClaim(req.user);
  }

  @Post('stripe/create-payment-intent')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async createPaymentIntent(
    @Request() req: any,
    @Body() body: stripePaymentIntentDto,
  ) {
    const { amount, currency } = body;
    return await this.stripeService.createPaymentIntent(
      req.user,
      amount,
      currency,
    );
  }

  @Post('stripe/webhook')
  async stripeWebhook(@Body() body: any) {
    return await this.stripeService.stripeWebhook(body);
  }

  @Post('set-currency-favorite-status')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async setFavoriteCurrency(@Request() req: any, @Body() body: favoriteDto) {
    const { currency_id, currency_type } = body;
    return await this.walletService.setFavoriteCurrency(
      req.user,
      currency_type,
      currency_id,
    );
  }
}
