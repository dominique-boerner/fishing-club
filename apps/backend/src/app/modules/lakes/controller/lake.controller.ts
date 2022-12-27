import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { LakeService } from '../services/lake.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ApiImplicitParam } from '@nestjs/swagger/dist/decorators/api-implicit-param.decorator';
import { Lake, LakeDocument } from '../dto/lake.dto';

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
   * @param query - query parameters, should include the parameter "name" or "id"
   */
  @Delete('')
  @ApiQuery({
    name: 'name',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'id',
    type: String,
    required: false,
  })
  @ApiOperation({
    summary: 'Remove a lake from the database.',
  })
  delete(
    @Query() query: { name?: string | undefined; id?: string | undefined }
  ) {
    return this.lakeService.delete(query.name, query.id);
  }

  /**
   * @description - Update a lake by its id.
   * @param lake - the new lake
   * @param query - query parameters, should include the parameter "id"
   */
  @Put('')
  @ApiBody({ type: Lake })
  @ApiQuery({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOperation({
    summary: 'Update a lake by its id.',
  })
  update(@Body() lake: Lake, @Query() query: { id: string }) {
    return this.lakeService.update(query.id, lake);
  }
}
