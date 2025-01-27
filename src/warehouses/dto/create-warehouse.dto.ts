import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWarehouseDto {
  @ApiProperty({
    description: 'Descripción del almacén',
    type: String,
    example: 'Almacén principal',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'ID del stock asociado al almacén',
    type: String,
    example: 'b3c8d4f5-16e3-4f27-9c68-2ff6da7d4567',
  })
  @IsString()
  @IsNotEmpty()
  stock: string;
}
