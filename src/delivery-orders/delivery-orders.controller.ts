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
import { DeliveryOrdersService } from './delivery-orders.service';
import { CreateDeliveryOrderDto } from './dto/create-delivery-order.dto';
import { UpdateDeliveryOrderDto } from './dto/update-delivery-order.dto';
import { PaginationDto } from 'src/common/dtos/pagination/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';

@ApiTags('órdenes de entrega')
@Controller('delivery-orders')
export class DeliveryOrdersController {
  constructor(private readonly deliveryOrdersService: DeliveryOrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva orden de entrega' })
  @ApiBody({ type: CreateDeliveryOrderDto, description: 'Datos de la orden de entrega a crear' })
  @ApiResponse({ status: 201, description: 'Orden de entrega creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  create(@Body() createDeliveryOrderDto: CreateDeliveryOrderDto) {
    return this.deliveryOrdersService.create(createDeliveryOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las órdenes de entrega' })
  @ApiQuery({ type: PaginationDto, description: 'Parámetros de paginación' })
  @ApiResponse({ status: 200, description: 'Órdenes de entrega obtenidas exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.deliveryOrdersService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una orden de entrega por ID' })
  @ApiParam({ name: 'id', description: 'ID de la orden de entrega' })
  @ApiResponse({ status: 200, description: 'Orden de entrega obtenida exitosamente.' })
  @ApiResponse({ status: 404, description: 'Orden de entrega no encontrada.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.deliveryOrdersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una orden de entrega por ID' })
  @ApiParam({ name: 'id', description: 'ID de la orden de entrega' })
  @ApiBody({ type: UpdateDeliveryOrderDto, description: 'Datos de la orden de entrega a actualizar' })
  @ApiResponse({ status: 200, description: 'Orden de entrega actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Orden de entrega no encontrada.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDeliveryOrderDto: UpdateDeliveryOrderDto,
  ) {
    return this.deliveryOrdersService.update(id, updateDeliveryOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una orden de entrega por ID' })
  @ApiParam({ name: 'id', description: 'ID de la orden de entrega' })
  @ApiResponse({ status: 200, description: 'Orden de entrega eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Orden de entrega no encontrada.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.deliveryOrdersService.remove(id);
  }
}
