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
  @ApiOperation({ summary: 'Crear un nuevo detalle de orden' })
  @ApiResponse({ status: 201, description: 'Detalle de orden creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailsService.create(createOrderDetailDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los detalles de las órdenes' })
  @ApiResponse({ status: 200, description: 'Lista de detalles de órdenes recuperada exitosamente.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.orderDetailsService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un detalle de orden por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del detalle de orden' })
  @ApiResponse({ status: 200, description: 'Detalle de orden recuperado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Detalle de orden no encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderDetailsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un detalle de orden por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del detalle de orden' })
  @ApiResponse({ status: 200, description: 'Detalle de orden actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Detalle de orden no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    return this.orderDetailsService.update(id, updateOrderDetailDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un detalle de orden por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del detalle de orden' })
  @ApiResponse({ status: 200, description: 'Detalle de orden eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Detalle de orden no encontrado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderDetailsService.remove(id);
  }
}
