import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDiscountDto {
  @ApiProperty({ description: 'Nombre del descuento' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Descripción del descuento', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Porcentaje de descuento' })
  @IsNumber()
  @IsNotEmpty()
  percentage: number;

  @ApiProperty({ description: 'Monto del descuento' })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ description: 'Fecha de inicio del descuento' })
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({ description: 'Fecha de finalización del descuento' })
  @IsDate()
  @IsNotEmpty()
  endDate: Date;
}
