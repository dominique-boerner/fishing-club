import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { LakeService } from "../services/lake.service";
import { Lake, LakeDocument } from "../schemas/lake.schema";
import { ApiBody, ApiQuery } from "@nestjs/swagger";

/**
 * LakeController
 *
 * @description - A controller which defines REST-Endpoints for CRUD operations
 *                of lakes.
 * @see LakeService
 */
@Controller('lake')
export class LakeController {
  constructor(private readonly lakeService: LakeService) {}

  /**
   * @description - Create a new lake and save it into the database.
   * @param lake - Lake to create
   */
  @Post('')
  @ApiBody({ type: Lake })
  create(@Body() lake: LakeDocument) {
    return this.lakeService.create(lake);
  }

  /**
   * @description - Get every lake from the database.
   */
  @Get('')
  getAllLakes() {
    return this.lakeService.getAllLakes();
  }

  /**
   * @description - Returns the amount of lakes from the database.
   */
  @Get('/count')
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
  })
  delete(@Query() query: { name: string }) {
    return this.lakeService.delete(query.name);
  }
}
