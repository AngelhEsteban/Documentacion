import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { AuthGuard } from './../auth/guards/auth.guard';
import { RoleGuard } from './../auth/guards/role.guard';
import { AdminAccess } from './../auth/decorators/admin.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';

@ApiTags('categorías')
@Controller('categories')
@UseGuards(AuthGuard, RoleGuard)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva categoría' })
  @ApiBody({ type: CreateCategoryDto, description: 'Datos de la nueva categoría' })
  @ApiResponse({ status: 201, description: 'Categoría creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  @AdminAccess()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'llamar todas las categorías existentes' })
  @ApiQuery({ type: PaginationDto, description: 'Parámetros pertenecientes a la paginación' })
  @ApiResponse({ status: 200, description: 'Categorías llamadas exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  @PublicAccess()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.categoriesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'LLamar una categoría por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la categoría' })
  @ApiResponse({ status: 200, description: 'Categoría llamada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada.' })
  @PublicAccess()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una categoría por su ID' })
  @ApiParam({ name: 'id', description: 'ID perteneciente a la categoría' })
  @ApiBody({ type: UpdateCategoryDto, description: 'Datos de la categoría a actualizar' })
  @ApiResponse({ status: 200, description: 'Categoría actualizada de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada.' })
  @AdminAccess()
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una categoría por su ID' })
  @ApiParam({ name: 'id', description: 'ID perteneciente a la categoría' })
  @ApiResponse({ status: 200, description: 'Categoría eliminada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada.' })
  @AdminAccess()
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.remove(id);
  }
}
