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
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { PaymentMethodsService } from './payment-methods.service';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@ApiTags('Payment Methods')
@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo método de pago' })
  @ApiResponse({ status: 201, description: 'Método de pago creado de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodsService.create(createPaymentMethodDto);
  }

  @Get()
  @ApiOperation({ summary: 'Llamar todos los métodos de pago' })
  @ApiResponse({ status: 200, description: 'Lista de métodos de pago llamada de forma exitosa.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.paymentMethodsService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Llamar un método de pago por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del método de pago' })
  @ApiResponse({ status: 200, description: 'Método de pago llamado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Método de pago no encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.paymentMethodsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un método de pago por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del método de pago' })
  @ApiResponse({ status: 200, description: 'Método de pago actualizado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Método de pago no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto,
  ) {
    return this.paymentMethodsService.update(id, updatePaymentMethodDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un método de pago por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del método de pago' })
  @ApiResponse({ status: 200, description: 'Método de pago eliminado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Método de pago no encontrado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.paymentMethodsService.remove(id);
  }
}
