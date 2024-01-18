import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ws-instance.cdcca2wqwdyv.eu-north-1.rds.amazonaws.com',
      port: 5432,
      username: 'white_solutions',
      password: '12345678',
      database: 'swapy_db',
      entities: [User],
      synchronize: false,
      ssl: true,
      extra: {
        trustServerCertificate: true,
        Encrypt: true,
        IntegratedSecurity: false,
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
