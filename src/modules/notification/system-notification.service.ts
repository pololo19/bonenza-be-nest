import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemNotification } from 'entities';
import { StorageService } from 'modules/shared/services/storage.service';
import { Repository } from 'typeorm';

@Injectable()
export class SystemNotificationService {
  constructor(
    @InjectRepository(SystemNotification)
    private SystemNotificationRepository: Repository<SystemNotification>,
    private readonly storageService: StorageService,
  ) {}

  async getSystemNotificationHistory(limit: number = 10, offset: number = 0) {
    return await this.SystemNotificationRepository.createQueryBuilder('t_n')
      .select([
        't_n.id as id',
        't_n.created_at as created_at',
        't_n.title as title',
        't_n.description as description',
        't_n.link as link',
        't_n.image as image',
      ])
      .orderBy('t_n.created_at', 'DESC')
      .offset(offset)
      .limit(limit)
      .getRawMany();
  }
}
