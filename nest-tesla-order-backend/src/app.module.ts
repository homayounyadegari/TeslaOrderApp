/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
//import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { ExteriorModule } from './exterior/exterior.module';
import { InteriorModule } from './interior/interior.module';
import { WheelModule } from './wheel/wheel.module';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.entity';
import { Interior } from './interior/entities/interior.entity';
import { Exterior } from './exterior/entities/exterior.entity';
import { Wheel } from './wheel/entities/wheel.entity';



/*
type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'root',
      password: 'root',
      database: 'telaorderdb',
      entities: [User],
      synchronize: true,*/
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      host: 'localhost',
      password: 'Homayoun1378',
      database: 'teslaorderdb',
      entities: [User,Product,Order,Interior,Exterior,Wheel],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ProductModule,
    ExteriorModule,
    InteriorModule,
    WheelModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
