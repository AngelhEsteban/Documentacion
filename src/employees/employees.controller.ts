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
  @ApiResponse({ status: 201, description: 'Empleado creado de forma exitosa.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Llamar todos los empleados' })
  @ApiResponse({ status: 200, description: 'Lista de empleados llamada de forma exitosa.' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.employeesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Llamar un empleado por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del empleado' })
  @ApiResponse({ status: 200, description: 'Empleado llamado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Empleado no encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un empleado por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del empleado' })
  @ApiResponse({ status: 200, description: 'Empleado actualizado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Empleado no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un empleado por su ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID del empleado' })
  @ApiResponse({ status: 200, description: 'Empleado eliminado de forma exitosa.' })
  @ApiResponse({ status: 404, description: 'Empleado no encontrado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesService.remove(id);
  }
}
