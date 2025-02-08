import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({ description: ' autentificacion del Correo electrónico del usuario' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'llave del usuario' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
