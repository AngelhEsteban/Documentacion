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
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PaginationDto } from 'src/common/dtos/pagination/pagination.dto';

@ApiTags('Stocks')
@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo stock' })
  @ApiResponse({ status: 201, description: 'Stock creado de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createStockDto: CreateStockDto) {
    return this.stocksService.create(createStockDto);
  }

  @Get()
  @ApiOperation({ summary: 'Llamar todos los stocks' })
  @ApiResponse({ status: 200, description: 'Lista de stocks llamada de forma exitosa.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.stocksService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Llamar un stock por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del stock' })
  @ApiResponse({ status: 200, description: 'Stock llamado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Stock no encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stocksService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un stock por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del stock' })
  @ApiResponse({ status: 200, description: 'Stock actualizado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Stock no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateStockDto: UpdateStockDto,
  ) {
    return this.stocksService.update(id, updateStockDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un stock por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del stock' })
  @ApiResponse({ status: 200, description: 'Stock eliminado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Stock no encontrado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.stocksService.remove(id);
  }
}
