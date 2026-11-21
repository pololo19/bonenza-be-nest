import { Column, Entity, OneToMany } from 'typeorm';

import { BlockchainCryptoBalance } from './blockchain-crypto-balance.entity';
import { BlockchainCryptocurrency } from './blockchain-cryptocurrency.entity';
import { CustomBase } from './custom-base.entity';

@Entity()
export class BlockchainSymbol extends CustomBase {
  @Column({ length: 10, unique: true })
  symbol: string;

  @Column({ length: 50, default: '' })
  name: string;

  @Column()
  logo: string;

  @Column('numeric', { precision: 30, scale: 18, default: 0 })
  price: number;

  @Column('integer', { nullable: true })
  cmc_id: number;

  @OneToMany(() => BlockchainCryptocurrency, (crypto) => crypto.id)
  cryptocurrencies: BlockchainCryptocurrency[];

  @OneToMany(() => BlockchainCryptoBalance, (balance) => balance.symbol)
  balances: BlockchainCryptoBalance[];
}
