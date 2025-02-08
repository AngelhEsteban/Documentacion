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
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';

@ApiTags('entregas')
@Controller('deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo delivery' })
  @ApiBody({ type: CreateDeliveryDto, description: 'Datos del delivery a crear' })
  @ApiResponse({ status: 201, description: 'Entrega creada de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveriesService.create(createDeliveryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Llamar todas las entregas' })
  @ApiQuery({ type: PaginationDto, description: 'Parámetros de paginación' })
  @ApiResponse({ status: 200, description: 'Entregas llamadas de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.deliveriesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Llamar una entrega por ID' })
  @ApiParam({ name: 'id', description: 'ID de la entrega' })
  @ApiResponse({ status: 200, description: 'Entrega llamada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Entrega no encontrada.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.deliveriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una entrega por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la entrega' })
  @ApiBody({ type: UpdateDeliveryDto, description: 'Datos de la entrega a actualizar' })
  @ApiResponse({ status: 200, description: 'Entrega actualizada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Entrega no encontrada.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDeliveryDto: UpdateDeliveryDto,
  ) {
    return this.deliveriesService.update(id, updateDeliveryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una entrega por ID' })
  @ApiParam({ name: 'id', description: 'ID de la entrega' })
  @ApiResponse({ status: 200, description: 'Entrega eliminada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Entrega no encontrada.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.deliveriesService.remove(id);
  }
}
