import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Repo, FileEntity, Chunk, Embedding } from './entities';

export const typeOrmConfig = (configService: any): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST', 'localhost'),
  port: configService.get<number>('DB_PORT', 5432),
  username: configService.get<string>('DB_USERNAME', 'postgres'),
  password: configService.get<string>('DB_PASSWORD', 'postgres'),
  database: configService.get<string>('DB_NAME', 'devstack'),
  entities: [Repo, FileEntity, Chunk, Embedding],
  synchronize: configService.get<boolean>('DB_SYNCHRONIZE', true), // Set to false in production
});
