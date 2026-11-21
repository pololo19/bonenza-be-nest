import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BlockchainCryptoBalance,
  BlockchainCryptocurrency,
  BlockchainCryptoWallet,
  BlockchainDepositTransaction,
  BlockchainNetwork,
  BlockchainSymbol,
  FiatCurrency,
  StripeDepositTransaction,
  // StripeFiatBalance,
  User,
} from 'entities';
import {
  ENUM_BLOCKCHAIN_DEPOSIT_STATUS,
  ENUM_STRIPE_DEPOSIT_STATUS,
} from 'enums';
import { Repository } from 'typeorm';
import { fixedNumber } from 'utils';

@Injectable()
export class WalletBalanceService {
  constructor(
    @InjectRepository(BlockchainCryptoBalance)
    private BlockchainCryptoBalanceRepository: Repository<BlockchainCryptoBalance>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(BlockchainCryptocurrency)
    private BlockchainCryptocurrencyRepository: Repository<BlockchainCryptocurrency>,
    @InjectRepository(BlockchainNetwork)
    private BlockchainNetWorkRepository: Repository<BlockchainNetwork>,
    @InjectRepository(BlockchainCryptoWallet)
    private BlockchainCryptoWalletRepository: Repository<BlockchainCryptoWallet>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(BlockchainDepositTransaction)
    private BlockchainDepositTransactionRepository: Repository<BlockchainDepositTransaction>,
    @InjectRepository(FiatCurrency)
    private FiatCurrencyRepository: Repository<FiatCurrency>,
    // @InjectRepository(StripeFiatBalance)
    // private StripeFiatBalanceRepository: Repository<StripeFiatBalance>,
    @InjectRepository(StripeDepositTransaction)
    private StripeDepositTransactionRepository: Repository<StripeDepositTransaction>,
  ) {}

  async getBalanceByUserId(user: User) {
    const crypto_balances =
      await this.BlockchainCryptoBalanceRepository.createQueryBuilder('t_bcb')
        .select('t_bs.symbol', 'symbol')
        .addSelect('t_bs.logo', 'logo')
        .addSelect('t_bcb.id', 'id')
        .addSelect('TRUNC(t_bcb.balance, 6)', 'balance')
        .addSelect('TRUNC(t_bcb.balance * t_bs.price, 6)', 'balance_usd')
        .addSelect('t_bs.id', 'symbol_id')
        .innerJoin(BlockchainSymbol, 't_bs', 't_bcb.symbol_id = t_bs.id')
        .where('t_bcb.user_id = :userId', {
          userId: user.id,
        })
        .getRawMany();
    // const stripe_balances =
    //   await this.StripeFiatBalanceRepository.createQueryBuilder('t_sfb')
    //     .select('t_fc.symbol', 'symbol')
    //     .addSelect('t_sfb.id', 'id')
    //     .addSelect('t_sfb.balance', 'balance')
    //     .addSelect('t_sfb.balance * t_fc.price', 'balance_usd')
    //     .addSelect('t_fc.id', 'symbol_id')
    //     .innerJoin(FiatCurrency, 't_fc', 't_sfb.fiat_id = t_fc.id')
    //     .where('t_sfb.user_id = :userId', {
    //       userId: user.id,
    //     })
    //     .getRawMany();
    const total_crypto_balance =
      await this.BlockchainCryptoBalanceRepository.createQueryBuilder('t_bcb')
        .select('TRUNC(SUM(t_bcb.balance * t_bs.price), 6)', 'total_balance')
        .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_bcb.symbol_id')
        .where('user_id = :userId', { userId: user.id })
        .getRawOne();

    // const total_stripe_balance =
    //   await this.StripeFiatBalanceRepository.createQueryBuilder('t_sfb')
    //     .select('SUM(t_sfb.balance * t_fc.price)', 'total_balance')
    //     .innerJoin(FiatCurrency, 't_fc', 't_fc.id = t_sfb.fiat_id')
    //     .where('user_id = :userId', { userId: user.id })
    //     .getRawOne();
    const real_balance = Number(total_crypto_balance.total_balance);
    // const real_balance =
    //   Number(total_crypto_balance.total_balance) +
    //   Number(total_stripe_balance.total_balance);

    return {
      total_balance: real_balance,
      real_balance,
      crypto_balances,
      // stripe_balances,
    };
  }

  async getCurrency() {
    const currencies = await this.BlockchainCryptocurrencyRepository.find({
      relations: ['network', 'symbol'],
    });
    return currencies;
  }

  async getNetworks() {
    const networks = await this.BlockchainNetWorkRepository.find();
    return networks;
  }

  async getWallets(userId: string) {
    const wallets = await this.BlockchainCryptoWalletRepository.find({
      where: { user: { id: userId } },
      relations: ['network'],
      select: ['deposit_address', 'network'],
    });
    return wallets;
  }

  async getSymbols(user_id?: string) {
    const [currencies, symbols] = await Promise.all([
      this.BlockchainCryptocurrencyRepository.find({
        relations: ['network', 'symbol'],
      }),
      user_id
        ? await this.BlockchainSymbolRepository.createQueryBuilder('t_bs')
            .select([
              '*',
              `
                  CASE
                  WHEN EXISTS
                  (SELECT * FROM blockchain_symbol_favorite t_bsf WHERE t_bsf.user_id = '${user_id}' AND t_bsf.symbol_id = t_bs.id )
                  THEN TRUE
                  ELSE FALSE
                  END AS favorite
                  `,
            ])
            .orderBy('favorite', 'DESC')
            .getRawMany()
        : this.BlockchainSymbolRepository.find(),
    ]);

    const SymbolsWithAvailableNetworks = symbols.map((symbol) => {
      const avaNetworks = currencies.filter(
        (item) => item.symbol.id === symbol.id,
      );

      return {
        ...symbol,
        availableNetworks: avaNetworks.map((item) => item.network.id),
      };
    });

    return SymbolsWithAvailableNetworks;
  }

  async getFiatSymbols(user_id?: string) {
    // const symbols = await this.FiatCurrencyRepository.find();
    if (user_id) {
      const symbols = await this.FiatCurrencyRepository.createQueryBuilder(
        't_fc',
      )
        .select([
          '*',
          `
          CASE
          WHEN EXISTS
          (SELECT * FROM fiat_currency_favorite t_fcf WHERE t_fcf.user_id = '${user_id}' AND t_fcf.fiat_id = t_fc.id )
          THEN TRUE
          ELSE FALSE
          END AS favorite
          `,
        ])
        .orderBy('favorite', 'DESC')
        .getRawMany();
      return symbols;
    }
    return await this.FiatCurrencyRepository.find();
  }

  async getDepositTimesForThisWeek(user: User) {
    const sql_b =
      this.BlockchainDepositTransactionRepository.createQueryBuilder()
        .select('COUNT(*) AS times')
        .where(
          'EXTRACT(WEEK FROM created_at) = EXTRACT(WEEK FROM CURRENT_DATE)',
        )
        .andWhere(`user_id = '${user.id}'`)
        .andWhere(`status = ${ENUM_BLOCKCHAIN_DEPOSIT_STATUS.Complete}`)
        .getQuery();

    const sql_s = this.StripeDepositTransactionRepository.createQueryBuilder()
      .select('COUNT(*) AS times')
      .where('EXTRACT(WEEK FROM created_at) = EXTRACT(WEEK FROM CURRENT_DATE)')
      .andWhere(`user_id = '${user.id}'`)
      .andWhere(`status = ${ENUM_STRIPE_DEPOSIT_STATUS.Complete}`)
      .getQuery();

    const result = await this.BlockchainDepositTransactionRepository.query(`
        SELECT (t_b.times + t_s.times) AS times
        FROM (${sql_b}) as t_b, (${sql_s}) as t_s
      `);

    return Number(result[0].times);
  }

  async getUSDTOfBonusPool(user: User) {
    const result = await this.UserRepository.findOneBy({ id: user.id });
    const { price } = await this.BlockchainSymbolRepository.findOneBy({
      symbol: 'USDT',
    });

    return {
      locked_amount: fixedNumber(result.bonus_pool / price, 6),
      locked_amount_usd: fixedNumber(result.bonus_pool, 6),
      usdt_price: price,
    };
  }

  async getBonusBalance(user: User) {
    const result = await this.UserRepository.query(`
      SELECT SUM(sum) as sum
      FROM (
        (
          SELECT SUM(amount_usd) as sum
          FROM "level_up_bonus"
          WHERE user_id = '${user.id}' AND claim_status = false
        )
        UNION
        (
          SELECT SUM(amount_usd) as sum
          FROM "cashback_bonus"
          WHERE user_id = '${user.id}' AND claim_status = false
        )
        UNION
        (
          SELECT SUM(amount_usd) as sum
          FROM "wager_contest_bonus"
          WHERE user_id = '${user.id}' AND claim_status = false
        )
        UNION
        (
          SELECT SUM(amount_usd) as sum
          FROM "quest_bonus"
          WHERE user_id = '${user.id}' AND claim_status = false
        )
        UNION
        (
          SELECT SUM(amount_usd) as sum
          FROM "spin_bonus"
          WHERE user_id = '${user.id}' AND claim_status = false
        )
      ) as combined_table
    `);

    return Number(result[0].sum);
  }

  async getBalanceByUserIdAndCurrencyId(user_id: string, symbol_id: string) {
    const result =
      await this.BlockchainCryptoBalanceRepository.createQueryBuilder('t_bcb')
        .select([
          't_bcb.balance AS balance_amount',
          't_bcb.balance * t_bs.price AS balance_amount_usd',
          't_bs.price AS price',
        ])
        .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_bcb.symbol_id')
        .where('t_bcb.user_id = :user_id', { user_id })
        .andWhere('t_bcb.symbol_id = :symbol_id', { symbol_id })
        .getRawOne();
    return {
      balance_amount: Number(result.balance_amount),
      balance_amount_usd: Number(result.balance_amount_usd),
      price: Number(result.price),
    };
  }

  async addBalanceByUserIdAndCurrencyId(
    user_id: string,
    symbol_id: string,
    amount: number,
  ) {
    const result =
      await this.BlockchainCryptoBalanceRepository.createQueryBuilder()
        .update(BlockchainCryptoBalance)
        .set({ balance: () => `balance + ${amount}` })
        .where('user_id = :user_id', { user_id })
        .andWhere('symbol_id = :symbol_id', { symbol_id })
        .returning('balance')
        .execute();

    return Number(result.raw[0].balance);
  }
}
