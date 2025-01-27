import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { AuthModule } from './../auth/auth.module';
import { UsersModule } from './../users/users.module';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [],
  imports: [
    TypeOrmModule.forFeature([CategoryEntity]),
    AuthModule,
    UsersModule,
  ],
})
export class CategoriesModule {}
