import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentMethodDto {
  @ApiProperty({
    description: 'Método de pago escojido',
    type: String,
    example: 'Tarjeta de Crédito',
  })
  @IsString()
  @IsNotEmpty()
  paymentMethod: string;
}
