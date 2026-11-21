import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockchainSymbol, Spin, SpinBonus, SpinLog, User } from 'entities';
import { ENUM_SPIN, ENUM_SPIN_BONUS } from 'enums';
import {
  isEmptyAvailableSpinError,
  isVIP22ForSuperSpinError,
  isVIP70ForMegaSpinError,
} from 'errors';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class SpinService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(Spin)
    private SpinRepository: Repository<Spin>,
    @InjectRepository(BlockchainSymbol)
    private BlockchainSymbolRepository: Repository<BlockchainSymbol>,
    @InjectRepository(SpinBonus)
    private SpinBonusRepository: Repository<SpinBonus>,
    @InjectRepository(SpinLog)
    private SpinLogRepository: Repository<SpinLog>,
  ) {}
  async getLatestSpins() {
    return await this.SpinBonusRepository.createQueryBuilder('t_sb')
      .select([
        `
      (
          case t_sb.type
              when 0 then 'LUCKY SPIN'
              when 1 then 'SUPER SPIN' 
              else 'MEGA SPIN'
          end
      ) AS type
      `,
        't_bs.symbol AS symbol',
        't_bs.logo AS symbol_logo',
        'TRUNC(t_sb.amount_usd / t_bs.price, 4) AS amount',
        'TRUNC(t_sb.amount_usd, 2) AS amount_usd',
        't_u.name as user_name',
      ])
      .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_sb.symbol_id')
      .innerJoin(User, 't_u', 't_u.id = t_sb.user_id')
      .orderBy('t_sb.created_at', 'DESC')
      .limit(20)
      .getRawMany();
  }

  async getBTCInfo(amount: number) {
    return await this.BlockchainSymbolRepository.createQueryBuilder()
      .select([
        `'BTC' as symbol`,
        'logo as symbol_logo',
        `${amount} as amount`,
        `${amount} * price as amount_usd`,
        '16 as id',
      ])
      .where(`symbol = 'WBTC'`)
      .getRawOne();
  }

  async getTotalClaimedBonusAmountUsd() {
    const result = await this.SpinBonusRepository.createQueryBuilder()
      .select('SUM(amount_usd) AS sum')
      .getRawOne();

    return Number(result.sum);
  }

  async getLastSpinner() {
    return await this.SpinBonusRepository.createQueryBuilder('t_sb')
      .select([
        `
        (
            case t_sb.type
                when 0 then 'lucky'
                when 1 then 'super' 
                else 'mega'
            end
        ) AS type
        `,
        't_bs.symbol AS symbol',
        't_bs.logo AS symbol_logo',
        'TRUNC(t_sb.amount_usd / t_bs.price, 4) AS amount',
        'TRUNC(t_sb.amount_usd, 2) AS amount_usd',
        't_u.name as user_name',
        't_u.avatar as user_avatar',
      ])
      .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_sb.symbol_id')
      .innerJoin(User, 't_u', 't_u.id = t_sb.user_id')
      .orderBy('t_sb.created_at', 'DESC')
      .limit(1)
      .getRawOne();
  }

  async getSpinData() {
    const data = await this.SpinRepository.createQueryBuilder('t_s')
      .select(
        `json_build_object(
            (
            case type
                when 0 then 'lucky'
                when 1 then 'super' 
                else 'mega' end
            ),
            json_agg(
                json_build_object(
                    'symbol', t_bs.symbol,
                    'symbol_logo', t_bs.logo,
                    'amount', TRUNC(t_s.amount_usd / t_bs.price, 4),
                    'amount_usd', TRUNC(t_s.amount_usd, 2)
                )
            )
        ) as data`,
      )
      .innerJoin(BlockchainSymbol, 't_bs', 't_bs.id = t_s.symbol_id')
      .groupBy('t_s.type')
      .orderBy('t_s.type')
      .getRawMany();

    let luckyData = data[0].data.lucky;
    luckyData = luckyData
      .sort((a: any, b: any) => Number(a.amount_usd) - Number(b.amount_usd))
      .map((d: any, i: number) => ({ ...d, id: i + 1 }));

    let superData = data[1].data.super;
    superData = superData
      .sort((a: any, b: any) => Number(a.amount_usd) - Number(b.amount_usd))
      .map((d: any, i: number) => ({ ...d, id: i + 1 }));

    let megaData = data[2].data.mega;
    megaData = megaData
      .sort((a: any, b: any) => Number(a.amount_usd) - Number(b.amount_usd))
      .map((d: any, i: number) => ({ ...d, id: i + 1 }));

    return {
      data: {
        lucky: [...luckyData, await this.getBTCInfo(1)],
        super: [...superData, await this.getBTCInfo(3)],
        mega: [...megaData, await this.getBTCInfo(5)],
      },
      total_bonus_usd: await this.getTotalClaimedBonusAmountUsd(),
      last_spinner: await this.getLastSpinner(),
    };
  }

  async trySpinByUserId(user_id: string, type: ENUM_SPIN_BONUS) {
    const user = await this.UserRepository.findOneBy({ id: user_id });

    if (!user.total_spin_count) {
      throw new HttpException(
        isEmptyAvailableSpinError.error,
        isEmptyAvailableSpinError.code,
      );
    }

    if (type === ENUM_SPIN_BONUS.Lucky) {
      const spin_id = Math.floor(Math.random() * 3) + 3;
      await this.reduceFreeSpinByUserId(user_id);
      const newSpinBonus = await this.addSpinBonusByUserId(
        user_id,
        type,
        spin_id,
      );
      return {
        bonus_id: newSpinBonus.id,
        spin_id,
        available_claim: Number(user.bonus_pool) >= newSpinBonus.amount_usd,
      };
    } else if (type === ENUM_SPIN_BONUS.Super) {
      if (user.vip_level >= 22) {
        const spin_id = Math.floor(Math.random() * 3) + 8;
        await this.reduceFreeSpinByUserId(user_id);
        const newSpinBonus = await this.addSpinBonusByUserId(
          user_id,
          type,
          spin_id,
        );
        return {
          bonus_id: newSpinBonus.id,
          spin_id,
          available_claim: Number(user.bonus_pool) >= newSpinBonus.amount_usd,
        };
      } else {
        throw new HttpException(
          isVIP22ForSuperSpinError.error,
          isVIP22ForSuperSpinError.code,
        );
      }
    } else if (type === ENUM_SPIN_BONUS.Mega) {
      if (user.vip_level >= 70) {
        const spin_id = Math.floor(Math.random() * 3) + 8;
        await this.reduceFreeSpinByUserId(user_id);
        const newSpinBonus = await this.addSpinBonusByUserId(
          user_id,
          type,
          spin_id,
        );
        return {
          bonus_id: newSpinBonus.id,
          spin_id,
          available_claim: Number(user.bonus_pool) >= newSpinBonus.amount_usd,
        };
      } else {
        throw new HttpException(
          isVIP70ForMegaSpinError.error,
          isVIP70ForMegaSpinError.code,
        );
      }
    }
  }

  async reduceFreeSpinByUserId(user_id: string) {
    await this.UserRepository.createQueryBuilder()
      .update(User)
      .set({ total_spin_count: () => 'total_spin_count - 1' })
      .where('id = :id', { id: user_id })
      .execute();
  }

  async addSpinBonusByUserId(
    user_id: string,
    type: ENUM_SPIN_BONUS,
    spin_id: number,
  ) {
    const spins = await this.SpinRepository.find({
      where: { type },
      relations: ['symbol'],
      order: {
        amount_usd: 'ASC',
      },
    });
    const spin = spins[spin_id - 1];

    return await this.SpinBonusRepository.save(
      this.SpinBonusRepository.create({
        user: { id: user_id },
        type,
        amount: spin.amount_usd / spin.symbol.price,
        amount_usd: spin.amount_usd,
        symbol: spin.symbol,
      }),
    );
  }

  async getAvailableSpinCount(user_id: string) {
    const user = await this.UserRepository.findOneBy({ id: user_id });

    return Number(user.total_spin_count);
  }

  async addSpinLog(
    user_id: string,
    vip_level: number,
    type: ENUM_SPIN,
    count: number = 1,
  ) {
    const _newSpinLog: DeepPartial<SpinLog> = {
      user: { id: user_id },
      type,
      vip_level,
      count,
    };

    return await this.SpinLogRepository.save(
      this.SpinLogRepository.create(_newSpinLog),
    );
  }

  async getSpinHistoryByUserId(user_id: string) {
    return await this.SpinLogRepository.createQueryBuilder()
      .select([
        'EXTRACT(EPOCH FROM created_at)::int AS time',
        `
          CASE type
            WHEN ${ENUM_SPIN.Daily} THEN 'Daily Spin'
            ELSE 'Level Up Spin'
          END AS type
        `,
      ])
      .where('user_id = :user_id', { user_id })
      .orderBy('created_at', 'DESC')
      .limit(5)
      .getRawMany();
  }
}
