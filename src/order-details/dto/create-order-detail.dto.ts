import { IsNotEmpty, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDetailDto {
  @ApiProperty({
    description: 'Cantidad de productos solicitados en el pedido',
    type: Number,
    example: 5,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  quantity?: number = 0;

  @ApiProperty({
    description: 'ID del pedido',
    type: String,
    example: 'c056d4f5-24e3-4e27-bc68-9ff6da7d284f',
  })
  @IsUUID()
  @IsNotEmpty()
  order: string;

  @ApiProperty({
    description: 'ID del producto',
    type: String,
    example: 'f9b88e1d-4e4d-44bb-8e55-5fb103b42d62',
  })
  @IsUUID()
  @IsNotEmpty()
  product: string;
}
