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
} from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';

@ApiTags('descuentos')
@Controller('discounts')
export class DiscountsController {
  constructor(private readonly discountsService: DiscountsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo descuento' })
  @ApiBody({ type: CreateDiscountDto, description: 'Datos del descuento a crear' })
  @ApiResponse({ status: 201, description: 'Descuento creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  create(@Body() createDiscountDto: CreateDiscountDto) {
    return this.discountsService.create(createDiscountDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los descuentos' })
  @ApiQuery({ type: PaginationDto, description: 'Parámetros de paginación' })
  @ApiResponse({ status: 200, description: 'Descuentos obtenidos exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.discountsService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un descuento por ID' })
  @ApiParam({ name: 'id', description: 'ID del descuento' })
  @ApiResponse({ status: 200, description: 'Descuento obtenido exitosamente.' })
  @ApiResponse({ status: 404, description: 'Descuento no encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.discountsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un descuento por ID' })
  @ApiParam({ name: 'id', description: 'ID del descuento' })
  @ApiBody({ type: UpdateDiscountDto, description: 'Datos del descuento a actualizar' })
  @ApiResponse({ status: 200, description: 'Descuento actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Descuento no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDiscountDto: UpdateDiscountDto,
  ) {
    return this.discountsService.update(id, updateDiscountDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un descuento por ID' })
  @ApiParam({ name: 'id', description: 'ID del descuento' })
  @ApiResponse({ status: 200, description: 'Descuento eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Descuento no encontrado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.discountsService.remove(id);
  }
}
