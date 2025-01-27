import { Module } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesController } from './deliveries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryEntity } from './entities/delivery.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Deliveries')
@Module({
  controllers: [DeliveriesController],
  providers: [DeliveriesService],
  imports: [TypeOrmModule.forFeature([DeliveryEntity])],
})
export class DeliveriesModule {}
