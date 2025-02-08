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
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PaginationDto } from 'src/common/dtos/pagination/pagination.dto';

@ApiTags('Purchases')
@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva compra' })
  @ApiResponse({ status: 201, description: 'Compra creada de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchasesService.create(createPurchaseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Llamar todas las compras' })
  @ApiResponse({ status: 200, description: 'Lista de compras llamada de forma exitosa.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.purchasesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Llamar una compra por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la compra' })
  @ApiResponse({ status: 200, description: 'Compra llamada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Compra no encontrada.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.purchasesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una compra por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la compra' })
  @ApiResponse({ status: 200, description: 'Compra actualizada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Compra no encontrada.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePurchaseDto: UpdatePurchaseDto,
  ) {
    return this.purchasesService.update(id, updatePurchaseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una compra por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la compra' })
  @ApiResponse({ status: 200, description: 'Compra eliminada de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Compra no encontrada.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.purchasesService.remove(id);
  }
}
