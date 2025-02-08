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
  @ApiOperation({ summary: 'Crear una nueva orden para entrega' })
  @ApiBody({ type: CreateDeliveryOrderDto, description: 'Datos de la orden de entrega a crear' })
  @ApiResponse({ status: 201, description: 'Orden para entrega creada de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  create(@Body() createDeliveryOrderDto: CreateDeliveryOrderDto) {
    return this.deliveryOrdersService.create(createDeliveryOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'llamar todas las órdenes para entrega' })
  @ApiQuery({ type: PaginationDto, description: 'Parámetros de paginación' })
  @ApiResponse({ status: 200, description: 'Órdenes para entregas obtenidas de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.deliveryOrdersService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'llamar una orden para entrega por ID' })
  @ApiParam({ name: 'id', description: 'ID de la orden para entrega' })
  @ApiResponse({ status: 200, description: 'Orden para entrega obtenida de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Orden para entrega no encontrada.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.deliveryOrdersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una orden para entrega por ID' })
  @ApiParam({ name: 'id', description: 'ID de la orden para entrega' })
  @ApiBody({ type: UpdateDeliveryOrderDto, description: 'Datos de la orden para entrega a actualizar' })
  @ApiResponse({ status: 200, description: 'Orden para entrega actualizada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Orden para entrega no encontrada.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDeliveryOrderDto: UpdateDeliveryOrderDto,
  ) {
    return this.deliveryOrdersService.update(id, updateDeliveryOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una orden para entrega por ID' })
  @ApiParam({ name: 'id', description: 'ID de la orden de entrega' })
  @ApiResponse({ status: 200, description: 'Orden para entrega eliminada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Orden para entrega no encontrada.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.deliveryOrdersService.remove(id);
  }
}
