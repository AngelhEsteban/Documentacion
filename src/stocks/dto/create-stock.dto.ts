import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStockDto {
  @ApiProperty({
    description: 'Cantidad de stock',
    type: Number,
    minimum: 0,
    example: 50,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  quantity: number;

  @ApiProperty({
    description: 'ID del producto',
    type: String,
    example: 'a3f8d4b5-12e3-4a27-ab68-3ff6da7d1234',
  })
  @IsString()
  @IsNotEmpty()
  product: string;
}
