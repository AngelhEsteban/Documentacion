import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSupplierDto {
  @ApiProperty({
    description: 'Nombre del proveedor',
    type: String,
    example: 'Proveedor XYZ',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Número de teléfono del proveedor',
    type: String,
    example: '+123456789',
    required: false,
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'Correo electrónico del proveedor',
    type: String,
    example: 'proveedor@ejemplo.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Dirección del proveedor',
    type: String,
    example: 'Calle Falsa 123',
    required: false,
  })
  @IsString()
  @IsOptional()
  address?: string;
}
