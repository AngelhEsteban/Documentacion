import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PurchaseStatus } from './../../common/enums/purchase-status.enum';

export class CreatePurchaseDto {
  @ApiProperty({
    description: 'Estado de la compra',
    enum: PurchaseStatus,
    example: PurchaseStatus.CREATED,
  })
  @IsEnum(PurchaseStatus)
  status: PurchaseStatus;

  @ApiProperty({
    description: 'ID del cliente',
    type: String,
    example: 'c056d4f5-24e3-4e27-bc68-9ff6da7d284f',
  })
  @IsString()
  @IsNotEmpty()
  customer: string;

  @ApiProperty({
    description: 'ID del método de pago',
    type: String,
    example: 'f9b88e1d-4e4d-44bb-8e55-5fb103b42d62',
  })
  @IsString()
  @IsNotEmpty()
  paymentMethod: string;
}
