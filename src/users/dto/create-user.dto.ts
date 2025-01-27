import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserGender } from 'src/common/enums/user-gender.enum';
import { UserRole } from 'src/common/enums/user-role.enum';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    type: String,
    example: 'Juan Pérez',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Género del usuario',
    enum: UserGender,
    example: UserGender.MALE,
  })
  @IsNotEmpty()
  @IsEnum(UserGender)
  gender: UserGender;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    type: String,
    example: 'juan.perez@ejemplo.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    type: String,
    example: 'ContraseñaSegura123!',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'URL de la foto del usuario',
    type: String,
    example: 'https://example.com/photo.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  photo?: string;
}
