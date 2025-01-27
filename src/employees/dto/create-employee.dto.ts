import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'Nombre del empleado',
    type: String,
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Fecha de nacimiento del empleado',
    type: String,
    format: 'date-time',
    example: '1990-01-01T00:00:00.000Z',
  })
  @IsDate()
  @IsNotEmpty()
  birthDate: Date;

  @ApiProperty({
    description: 'Ciudad del empleado',
    type: String,
    example: 'San Antonio',
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    description: 'Teléfono del empleado',
    type: String,
    example: '123-456-7890',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Correo electrónico del empleado',
    type: String,
    example: 'john.doe@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Nota adicional sobre el empleado',
    type: String,
    required: false,
    example: 'Nota opcional',
  })
  @IsString()
  @IsOptional()
  note?: string;
}
