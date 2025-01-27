import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { WarehousesController } from './warehouses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseEntity } from './entities/warehouse.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Warehouses')
@Module({
  controllers: [WarehousesController],
  providers: [WarehousesService],
  imports: [TypeOrmModule.forFeature([WarehouseEntity])],
})
export class WarehousesModule {}
