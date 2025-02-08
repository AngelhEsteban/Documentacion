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
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';

@ApiTags('Order Details')
@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo detalle para una orden' })
  @ApiResponse({ status: 201, description: 'Detalle de la orden creado de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailsService.create(createOrderDetailDto);
  }

  @Get()
  @ApiOperation({ summary: 'Llamar todos los detalles de las órdenes' })
  @ApiResponse({ status: 200, description: 'Lista de los detalles de las órdenes recuperada de forma exitosa.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.orderDetailsService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Llamar un detalle de una orden por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del detalle de orden' })
  @ApiResponse({ status: 200, description: 'Detalle de orden recuperado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Detalle de orden no encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderDetailsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un detalle de una orden por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del detalle de orden' })
  @ApiResponse({ status: 200, description: 'Detalle de orden actualizado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Detalle de orden no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    return this.orderDetailsService.update(id, updateOrderDetailDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un detalle de una orden por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del detalle de orden' })
  @ApiResponse({ status: 200, description: 'Detalle de orden eliminado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Detalle de orden no encontrado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderDetailsService.remove(id);
  }
}
