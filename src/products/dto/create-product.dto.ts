import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nombre del producto',
    type: String,
    minLength: 3,
    example: 'Laptop',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'Descripción del producto',
    type: String,
    example: 'Una laptop de alta calidad con 16GB de RAM',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Precio del producto',
    type: Number,
    minimum: 0,
    example: 999.99,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  price?: number = 0;

  @ApiProperty({
    description: 'Unidad del producto',
    type: Number,
    minimum: 0,
    example: 10,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  unit?: number = 0;

  @ApiProperty({
    description: 'ID de la categoría del producto',
    type: String,
    example: '5f8d0d55b54764421b7156e6',
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    description: 'ID del proveedor del producto',
    type: String,
    example: '5f8d0d55b54764421b7156e7',
  })
  @IsString()
  @IsNotEmpty()
  supplier: string;
}
