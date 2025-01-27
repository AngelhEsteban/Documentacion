import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentMethodDto {
  @ApiProperty({
    description: 'Nombre del método de pago',
    type: String,
    example: 'Tarjeta de Crédito',
  })
  @IsString()
  @IsNotEmpty()
  paymentMethod: string;
}
