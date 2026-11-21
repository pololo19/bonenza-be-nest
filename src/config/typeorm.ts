import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['**/*.entity{.ts,.js}'],
  // entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,

  migrations: ['src/migrations/*.ts'],

  cli: {
    migrationsDir: 'src/migrations',
  },
};

export const connectionSource = new DataSource(config as DataSourceOptions);
