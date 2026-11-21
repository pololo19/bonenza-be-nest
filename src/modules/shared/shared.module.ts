import { Global, Module } from '@nestjs/common';

import { EmailService } from './services/email.service';
import { StorageService } from './services/storage.service';

@Global()
@Module({
  providers: [EmailService, StorageService],
  imports: [],
  exports: [EmailService, StorageService],
})
export class SharedModule {}
