import { CacheModule, CacheOptions } from '@nestjs/cache-manager';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentModule } from '@nestjs-steroids/environment';
import { RedisStore, redisStore } from 'cache-manager-redis-yet';
import { AdminAuthController } from 'controllers/admin/auth.controller';
import { AuthController } from 'controllers/auth/auth.controller';
import { GameController } from 'controllers/game/game.controller';
import { GameDashboardController } from 'controllers/game/game-dashboard.controller';
import { GameListController } from 'controllers/game/game-list.controller';
import { GamePlayController } from 'controllers/game/game-play.controller';
import { GameReviewController } from 'controllers/game/game-review.controller';
import { NotificationController } from 'controllers/notification/notification.controller';
import { UserProfileController } from 'controllers/user-profile/user-profile.controller';
import { UserSessionController } from 'controllers/user-session/user-session.controller';
import { UserSettingController } from 'controllers/user-setting/user-setting.controller';
import { WalletController } from 'controllers/wallet/wallet.controller';
import { LoggerMiddleware } from 'middleware/logger.middleware';
import { AuthModule } from 'modules/auth/auth.module';
import { NotificationModule } from 'modules/notification/notification.module';
import { SharedModule } from 'modules/shared/shared.module';
import { join } from 'path';
import { DataSource } from 'typeorm';

import { AppEnvironment } from './app.environment';
import { AffiliateController } from './controllers/affiliate/affiliate.controller';
import { BonusController } from './controllers/bonus/bonus.controller';
import { ChatController } from './controllers/chat/chat.controller';
import { ContestController } from './controllers/contest/contest.controller';
import { CronController } from './controllers/cron/cron.controller';
import { QuestController } from './controllers/quest/quest.controller';
import { SettingController } from './controllers/setting/setting.controller';
import { SpinController } from './controllers/spin/spin.controller';
import { VipController } from './controllers/vip/vip.controller';
import { AdminModule } from './modules/admin/admin.module';
import { AffiliateModule } from './modules/affiliate/affiliate.module';
import { BonusModule } from './modules/bonus/bonus.module';
import { ChatModule } from './modules/chat/chat.module';
import { ContestModule } from './modules/contest/contest.module';
import { CronModule } from './modules/cron/cron.module';
import { GameModule } from './modules/game/game.module';
import { MemoryModule } from './modules/memory/memory.module';
import { MessageModule } from './modules/message/message.module';
import { PriceModule } from './modules/price/price.module';
import { QuestModule } from './modules/quest/quest.module';
import { SettingModule } from './modules/setting/setting.module';
import { SpinModule } from './modules/spin/spin.module';
import { VipModule } from './modules/vip/vip.module';
import { WalletModule } from './modules/wallet/wallet.module';

@Module({
  imports: [
    EnvironmentModule.forRoot({
      isGlobal: true,
      loadEnvFile: true,
      useClass: AppEnvironment,
    }),
    TypeOrmModule.forRootAsync({
      inject: [AppEnvironment],
      useFactory: (appEnvorinment: AppEnvironment) => {
        return {
          type: appEnvorinment.dbType,
          host: appEnvorinment.pgHost,
          port: appEnvorinment.pgPort,
          username: appEnvorinment.pgUser,
          password: appEnvorinment.pgPassword,
          database: appEnvorinment.pgDatabase,
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
      dataSourceFactory: async (options) => {
        // const dataSource = await new DataSource(options).initialize();
        // dataSource.setOptions({ timezone: '-04:00' });
        // await dataSource.query(`SET TIME ZONE 'America/New_York'`);
        return new DataSource(options);
      },
    }),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './upload',
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'),
      renderPath: '/',
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      inject: [AppEnvironment],
      useFactory: async (appEnv: AppEnvironment) => {
        const store = await redisStore({
          url: appEnv.redisUrl,
        });
        return { store: () => store } as CacheOptions<{
          store: () => RedisStore;
        }>;
      },
    }),
    AuthModule,
    SharedModule,
    GameModule,
    WalletModule,
    MessageModule,
    AffiliateModule,
    CronModule,
    VipModule,
    BonusModule,
    AdminModule,
    ContestModule,
    SettingModule,
    ChatModule,
    NotificationModule,
    SpinModule,
    QuestModule,
    PriceModule,
    MemoryModule,
  ],
  controllers: [
    AuthController,
    UserProfileController,
    UserSettingController,
    UserSessionController,
    WalletController,
    GameController,
    GameListController,
    GamePlayController,
    GameReviewController,
    GameDashboardController,
    AffiliateController,
    VipController,
    BonusController,
    ContestController,
    SettingController,
    ChatController,
    NotificationController,
    SpinController,
    QuestController,
    CronController,
    AdminAuthController,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
