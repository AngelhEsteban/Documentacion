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
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo empleado' })
  @ApiResponse({ status: 201, description: 'Empleado creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los empleados' })
  @ApiResponse({ status: 200, description: 'Lista de empleados recuperada exitosamente.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.employeesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un empleado por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del empleado' })
  @ApiResponse({ status: 200, description: 'Empleado recuperado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Empleado no encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un empleado por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del empleado' })
  @ApiResponse({ status: 200, description: 'Empleado actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Empleado no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un empleado por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del empleado' })
  @ApiResponse({ status: 200, description: 'Empleado eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Empleado no encontrado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesService.remove(id);
  }
}
