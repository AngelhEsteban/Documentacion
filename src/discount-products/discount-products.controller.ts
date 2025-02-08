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
import { DiscountProductsService } from './discount-products.service';
import { CreateDiscountProductDto } from './dto/create-discount-product.dto';
import { UpdateDiscountProductDto } from './dto/update-discount-product.dto';
import { PaginationDto } from '../common/dtos/pagination/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';

@ApiTags('productos con descuento')
@Controller('discount-products')
export class DiscountProductsController {
  constructor(
    private readonly discountProductsService: DiscountProductsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva relación entre producto y descuento' })
  @ApiBody({ type: CreateDiscountProductDto, description: 'Datos de la relación a crear' })
  @ApiResponse({ status: 201, description: 'Relación creada de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  create(@Body() createDiscountProductDto: CreateDiscountProductDto) {
    return this.discountProductsService.create(createDiscountProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Llamar todas las relaciones de productos con descuento' })
  @ApiQuery({ type: PaginationDto, description: 'Parámetros pertenecientes a la paginación' })
  @ApiResponse({ status: 200, description: 'Relaciones llamada de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.discountProductsService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Llamar una relación de producto con descuento por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación' })
  @ApiResponse({ status: 200, description: 'Relación llamada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Relación no encontrada.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.discountProductsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una relación de producto por su ID' })
  @ApiParam({ name: 'id', description: 'ID perteneciente a la relación' })
  @ApiBody({ type: UpdateDiscountProductDto, description: 'Datos pertenecientes a la relación a actualizar' })
  @ApiResponse({ status: 200, description: 'Relación actualizada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Relación no encontrada.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDiscountProductDto: UpdateDiscountProductDto,
  ) {
    return this.discountProductsService.update(id, updateDiscountProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una relación de producto con descuento por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación' })
  @ApiResponse({ status: 200, description: 'Relación eliminada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Relación no encontrada.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.discountProductsService.remove(id);
  }
}
