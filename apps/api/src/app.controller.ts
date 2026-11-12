import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('system')
@Controller()
export class AppController {
  @Get('health')
  health() {
    return {
      status: 'ok',
      app: 'KinKin POS Demo API',
      dataMode: process.env.DATA_MODE ?? 'memory',
      timestamp: new Date().toISOString(),
    };
  }
}
