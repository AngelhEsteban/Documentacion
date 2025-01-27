import { IsDate, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Fecha del pedido',
    type: String,
    format: 'date-time',
    example: '2025-01-26T18:34:00.000Z',
  })
  @IsDate()
  @IsNotEmpty()
  orderDate: Date;

  @ApiProperty({
    description: 'ID del cliente',
    type: String,
    example: 'c056d4f5-24e3-4e27-bc68-9ff6da7d284f',
  })
  @IsUUID()
  @IsNotEmpty()
  customer: string;

  @ApiProperty({
    description: 'ID del empleado',
    type: String,
    example: 'f9b88e1d-4e4d-44bb-8e55-5fb103b42d62',
  })
  @IsUUID()
  @IsNotEmpty()
  employee: string;

  @ApiProperty({
    description: 'ID del transportista',
    type: String,
    example: 'a9b78c1d-4e4a-44bb-8e12-4fb103b42d34',
  })
  @IsUUID()
  @IsNotEmpty()
  shipper: string;
}
