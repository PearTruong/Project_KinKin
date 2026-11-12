import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DataService } from '../data/data.service';
import { CreateOrderDto } from './dto/create-order.dto';

@ApiTags('orders')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly data: DataService) {}

  @Post()
  create(
    @Req() request: { user: { sub: string } },
    @Body() input: CreateOrderDto,
  ) {
    return this.data.createOrder(request.user.sub, input.items);
  }
}
