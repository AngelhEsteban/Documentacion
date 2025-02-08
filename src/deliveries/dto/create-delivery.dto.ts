import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryDto {
  @ApiProperty({ description: 'UUID del delivery' })
  @IsUUID()
  @IsNotEmpty()
  shipper: string;

  @ApiProperty({ description: 'Dirección de la entrega' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: 'Costo del envío', required: false })
  @IsString()
  @IsOptional()
  shoppingCost: number = 0;
}
