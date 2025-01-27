import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateShipperDto {
  @ApiProperty({
    description: 'Nombre del transportista',
    type: String,
    example: 'Transportes ABC',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Número de teléfono del transportista',
    type: String,
    example: '+123456789',
    required: false,
  })
  @IsString()
  @IsOptional()
  phone?: string;
}
