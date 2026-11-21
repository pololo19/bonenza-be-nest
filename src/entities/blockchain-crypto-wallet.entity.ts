import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { BlockchainNetwork } from './blockchain-network.entity';
import { CustomBase } from './custom-base.entity';
import { User } from './user.entity';

@Entity()
@Unique(['user', 'network'])
export class BlockchainCryptoWallet extends CustomBase {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ length: 100 })
  deposit_address: string;

  @Column({ length: 255 })
  private_key: string;

  @ManyToOne(() => BlockchainNetwork, (network) => network.id)
  @JoinColumn({ name: 'network_id' })
  network: BlockchainNetwork;
}
