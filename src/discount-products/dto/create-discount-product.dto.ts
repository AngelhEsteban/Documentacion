import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDiscountProductDto {
  @ApiProperty({ description: 'UUID del producto' })
  @IsUUID()
  @IsNotEmpty()
  product: string;

  @ApiProperty({ description: 'UUID del descuento' })
  @IsUUID()
  @IsNotEmpty()
  discount: string;
}
