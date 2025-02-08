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
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo pedido' })
  @ApiResponse({ status: 201, description: 'Pedido creado de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Llamar todos los pedidos' })
  @ApiResponse({ status: 200, description: 'Lista de pedidos llamada de forma exitosa.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.ordersService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Llamar un pedido por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del pedido' })
  @ApiResponse({ status: 200, description: 'Pedido llamado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un pedido por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del pedido' })
  @ApiResponse({ status: 200, description: 'Pedido actualizado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un pedido por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del pedido' })
  @ApiResponse({ status: 200, description: 'Pedido eliminado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersService.remove(id);
  }
}
