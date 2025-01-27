import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({ description: 'Nombre del cliente' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Contacto del cliente' })
  @IsString()
  @IsNotEmpty()
  contact: string;

  @ApiProperty({ description: 'Dirección del cliente' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: 'Ciudad del cliente' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ description: 'Código postal del cliente', required: false })
  @IsNumber()
  @IsOptional()
  postalCode?: number;

  @ApiProperty({ description: 'País del cliente' })
  @IsString()
  @IsNotEmpty()
  country: string;
}
