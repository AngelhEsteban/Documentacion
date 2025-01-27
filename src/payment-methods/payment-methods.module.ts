import { Module } from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { PaymentMethodsController } from './payment-methods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodEntity } from './entities/payment-method.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payment Methods')
@Module({
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService],
  imports: [TypeOrmModule.forFeature([PaymentMethodEntity])],
})
export class PaymentMethodsModule {}
