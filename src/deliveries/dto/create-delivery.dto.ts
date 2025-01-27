import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryDto {
  @ApiProperty({ description: 'UUID del transportista' })
  @IsUUID()
  @IsNotEmpty()
  shipper: string;

  @ApiProperty({ description: 'Dirección de entrega' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: 'Costo de envío', required: false })
  @IsString()
  @IsOptional()
  shoppingCost: number = 0;
}
