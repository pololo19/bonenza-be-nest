import { Column, Entity, OneToMany, Unique } from 'typeorm';

import { ENUM_NETWORK } from '../enums';
import { BlockchainCryptoWallet } from './blockchain-crypto-wallet.entity';
import { BlockchainCryptocurrency } from './blockchain-cryptocurrency.entity';
import { CustomBase } from './custom-base.entity';

@Entity()
@Unique(['network', 'network_full_name'])
export class BlockchainNetwork extends CustomBase {
  @Column({ length: 50, unique: true })
  network: string;

  @Column({ length: 50, unique: true })
  network_full_name: string;

  @Column('smallint', { default: ENUM_NETWORK.eth })
  type: number;

  @Column('text', { default: '' })
  scan_url: string;

  @OneToMany(() => BlockchainCryptocurrency, (crypto) => crypto.network)
  cryptocurrencies: BlockchainCryptocurrency[];

  @OneToMany(() => BlockchainCryptoWallet, (wallet) => wallet.network)
  wallets: BlockchainCryptoWallet[];
}
