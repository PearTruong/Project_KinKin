import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DataService } from '../data/data.service';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('products')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly data: DataService) {}

  @Get()
  list() {
    return this.data.listProducts();
  }

  @Post()
  create(@Body() input: CreateProductDto) {
    return this.data.createProduct(input);
  }
}
