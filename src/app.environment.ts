import { Env } from '@nestjs-steroids/environment';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, Max, Min } from 'class-validator';

export enum NodeEnvironment {
  Development = 'development',
  Staging = 'staging',
  Production = 'production',
}

export class AppEnvironment {
  /**
   * Env decorator mark environment variable that we want to assign
   * (Tip) Without name env Env decorator makes auto UPPER_SNAKE_CASE conversion (e.g. isTest -> IS_TEST)
   */
  @Env('PORT')
  /**
   * Transform is useful for all sorts of transformations or parsing complex values
   * For example: @Transform(value => value.toLowerCase() === 'true')
   */
  @Transform(({ value }) => Number.parseInt(value, 10))
  /**
   * Also, you could use class-validator operators for validation of the correctness of environment variables
   */
  @IsNumber()
  @Min(0)
  @Max(65535)
  readonly port = 3333;

  @Env('NODE_ENV')
  @IsEnum(NodeEnvironment)
  readonly nodeEnvironment: NodeEnvironment = NodeEnvironment.Development;

  isDevelopment() {
    return this.nodeEnvironment === NodeEnvironment.Development;
  }

  isStaging() {
    return this.nodeEnvironment === NodeEnvironment.Staging;
  }

  isProduction() {
    return this.nodeEnvironment === NodeEnvironment.Production;
  }

  readonly dbType = 'postgres';

  @Env('POSTGRES_PORT')
  @Transform(({ value }) => Number.parseInt(value, 10))
  @IsNumber()
  @Min(0)
  @Max(65535)
  readonly pgPort = 0;

  @Env('POSTGRES_USER')
  readonly pgUser = '';

  @Env('POSTGRES_PASSWORD')
  readonly pgPassword = '';

  @Env('POSTGRES_DATABASE')
  readonly pgDatabase = '';

  @Env('WEBSITE_ORIGIN')
  readonly websiteOrigin = '';

  @Env('WEBSITE_LOCAL')
  readonly websiteLocal = '';

  @Env('WEBSITE_TEST')
  readonly websiteTest = '';

  @Env('JWT_SECRET_KEY')
  readonly jwtSecretKey = '';

  @Env('JWT_TOKEN_EXPIRE')
  readonly jwtTokenExpire = '';

  @Env('POSTGRES_HOST')
  readonly pgHost = '';

  @Env('SEND_GRID')
  readonly sendGrid = '';

  @Env('TWILIO_ACCOUNT_SID')
  readonly twilioAccountSid = '';

  @Env('TWILIO_AUTH_TOKEN')
  readonly twilioAuthToken = '';

  @Env('MAIN_EMAIL')
  readonly mainMail = '';

  @Env('DEV_EMAIL')
  readonly devEmail = '';

  @Env('MAIN_PHONE')
  readonly mainPhone = '';

  @Env('DEV_PHONE')
  readonly devPhone = '';

  @Env('GOOGLE_CLIENT_ID')
  readonly googleClientId = '';

  @Env('GOGGLE_CLIENT_SECRET')
  readonly googleClientSecret = '';

  @Env('TRON_GRID_URL')
  readonly tronGridURL = '';

  @Env('SOFTSWISS_CASINO_ID')
  readonly softswissCasinoId = '';

  @Env('SOFTSWISS_API_URL')
  readonly softswissApiUrl = '';

  @Env('SOFTSWISS_SECRET_KEY')
  readonly softswissSecretKey = '';

  @Env('SOFTSWISS_DEPOSIT_URL')
  readonly softswissDepositUrl = '';

  @Env('SOFTSWISS_RETURN_URL')
  readonly softswissReturnUrl = '';

  @Env('STRIPE_PUBLISHABLE_KEY')
  readonly stripePublishableKey = '';

  @Env('STRIPE_SECRET_KEY')
  readonly stripeSecretKey = '';

  @Env('STRIPE_WEBHOOK_SECRET')
  readonly stripeWebhookSecret = '';

  @Env('TELEGRAM_BOT_TOKEN')
  readonly telegramBotToken = '';

  @Env('BLOCKCHAIN_WALLET_SYSTEM_URL')
  readonly blockchainWalletSystemURL = '';

  @Env('AZURE_STORAGE_CONNECTION')
  readonly azureStorageConnection = '';

  @Env('AZURE_STORAGE_CONTAINER')
  readonly azureStorageContainer = '';

  @Env('FRONTEND_AUTH_KEY')
  readonly feAuthKey = '';

  @Env('CMC_PRO_API_KEY')
  readonly cmcProApiKey = '';

  @Env('REDIS_URL')
  readonly redisUrl = '';
}
