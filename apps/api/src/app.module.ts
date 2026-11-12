import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { DataService } from './data/data.service';
import { OrdersController } from './orders/orders.controller';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET ?? 'kinkin-demo-secret-change-me',
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [AppController, AuthController, ProductsController, OrdersController],
  providers: [DataService, AuthService, JwtAuthGuard],
})
export class AppModule {}
