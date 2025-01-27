import { Module } from '@nestjs/common';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './entities/supplier.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Suppliers')
@Module({
  controllers: [SuppliersController],
  providers: [SuppliersService],
  imports: [TypeOrmModule.forFeature([SupplierEntity])],
  exports: [],
})
export class SuppliersModule {}
