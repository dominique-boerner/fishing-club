import { Controller, Get, Logger } from '@nestjs/common';
import { LakeService } from '../services/lake.service';

/**
 * LakeController
 * @description - A controller which handles CRUD operations
 *                for lakes.
 */
@Controller('lake')
export class LakeController {
  constructor(private readonly lakeService: LakeService) {

  }

  @Get('')
  getAllLakes() {
    return this.lakeService.getAllLakes();
  }

  @Get('/count')
  countAllLakes() {
    return this.lakeService.countLakes();
  }
}
