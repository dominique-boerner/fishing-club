import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { LakeService } from '../services/lake.service';
import { Lake, LakeDocument } from '../schemas/lake.schema';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Error } from "mongoose";

/**
 * LakeController
 *
 * @description - A controller which defines REST-Endpoints for CRUD operations
 *                of lakes.
 * @see LakeService
 */
@ApiTags('lake')
@Controller('lake')
export class LakeController {
  constructor(private readonly lakeService: LakeService) {}

  /**
   * @description - Create a new lake and save it into the database.
   * @param lake - Lake to create
   */
  @Post('')
  @ApiBody({ type: Lake })
  @ApiOperation({
    summary: 'Create a new lake and save it into the database.',
  })
  create(@Body() lake: LakeDocument) {
    return this.lakeService.create(lake);
  }

  /**
   * @description - Get every lake from the database.
   */
  @Get('')
  @ApiOperation({
    summary: 'Get every lake from the database.',
  })
  getAllLakes() {
    return this.lakeService.getAllLakes();
  }

  /**
   * @description - Returns the amount of lakes from the database.
   */
  @Get('/count')
  @ApiOperation({
    summary: 'Returns the amount of lakes from the database.',
  })
  countAllLakes() {
    return this.lakeService.countLakes();
  }

  /**
   * @description - Remove a lake from the database.
   * @param query - query parameters, should include the parameter "name"
   */
  @Delete('')
  @ApiQuery({
    name: 'name',
    type: String,
    required: false
  })
  @ApiQuery({
    name: 'id',
    type: String,
    required: false
  })
  @ApiOperation({
    summary: 'Remove a lake from the database.',
  })
  delete(@Query() query: { name?: string | undefined; id?: string | undefined }) {
    return this.lakeService.delete(query.name, query.id);
  }
}
