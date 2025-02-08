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
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';

@ApiTags('Warehouses')
@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo almacén' })
  @ApiResponse({ status: 201, description: 'Almacén creado de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehousesService.create(createWarehouseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Llamar todos los almacenes' })
  @ApiResponse({ status: 200, description: 'Lista de almacenes llamada de forma exitosa.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.warehousesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Llamar un almacén por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del almacén' })
  @ApiResponse({ status: 200, description: 'Almacén llamado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Almacén no encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.warehousesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un almacén por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del almacén' })
  @ApiResponse({ status: 200, description: 'Almacén actualizado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Almacén no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
  ) {
    return this.warehousesService.update(id, updateWarehouseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un almacén por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del almacén' })
  @ApiResponse({ status: 200, description: 'Almacén eliminado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Almacén no encontrado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.warehousesService.remove(id);
  }
}
