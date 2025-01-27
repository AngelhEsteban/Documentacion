import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryOrderDto {
  @ApiProperty({ description: 'UUID del pedido' })
  @IsUUID()
  @IsNotEmpty()
  order: string;

  @ApiProperty({ description: 'UUID de la entrega' })
  @IsUUID()
  @IsNotEmpty()
  delivery: string;
}
