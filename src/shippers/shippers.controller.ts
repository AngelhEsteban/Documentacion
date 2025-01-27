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
import { ShippersService } from './shippers.service';
import { CreateShipperDto } from './dto/create-shipper.dto';
import { UpdateShipperDto } from './dto/update-shipper.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';

@ApiTags('Shippers')
@Controller('shippers')
export class ShippersController {
  constructor(private readonly shippersService: ShippersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo transportista' })
  @ApiResponse({ status: 201, description: 'Transportista creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createShipperDto: CreateShipperDto) {
    return this.shippersService.create(createShipperDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los transportistas' })
  @ApiResponse({ status: 200, description: 'Lista de transportistas recuperada exitosamente.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.shippersService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un transportista por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del transportista' })
  @ApiResponse({ status: 200, description: 'Transportista recuperado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Transportista no encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.shippersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un transportista por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del transportista' })
  @ApiResponse({ status: 200, description: 'Transportista actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Transportista no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateShipperDto: UpdateShipperDto,
  ) {
    return this.shippersService.update(id, updateShipperDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un transportista por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del transportista' })
  @ApiResponse({ status: 200, description: 'Transportista eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Transportista no encontrado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.shippersService.remove(id);
  }
}
