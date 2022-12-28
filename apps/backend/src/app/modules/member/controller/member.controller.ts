import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MemberService } from '../services/member.service';
import { ApiBody, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { Lake, LakeDocument } from '../../lakes/dto/lake.dto';
import { Member, MemberDocument } from '../dto/member.dto';

/**
 * MemberController
 * @description - A controller which handles CRUD operations
 *                for members.
 */
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  /**
   * @description - Create a new member and save it into the database.
   * @param member - Member to create
   */
  @Post('')
  @ApiBody({ type: Member })
  @ApiOperation({
    summary: 'Create a new member and save it into the database.',
  })
  create(@Body() member: Member) {
    return this.memberService.create(member);
  }

  /**
   * @description - Get every member from the database.
   */
  @Get('')
  @ApiOperation({
    summary: 'Get every member from the database.',
  })
  getAllMembers() {
    return this.memberService.getAllMembers();
  }

  /**
   * @description - Returns the amount of members from the database.
   */
  @Get('/count')
  @ApiOperation({
    summary: 'Returns the amount of members from the database.',
  })
  countAllMembers() {
    return this.memberService.countMembers();
  }

  /**
   * @description - Remove a member from the database.
   * @param query - query parameters, should include the parameter "id"
   */
  @Delete('')
  @ApiQuery({
    name: 'id',
    type: String,
    required: false,
  })
  @ApiOperation({
    summary: 'Remove a member from the database.',
  })
  delete(
    @Query() query: { name?: string | undefined; id?: string | undefined }
  ) {
    return this.memberService.delete(query.id);
  }

  /**
   * @description - Update a member by its id.
   * @param member - the new member
   * @param query - query parameters, should include the parameter "id"
   */
  @Put('')
  @ApiBody({ type: Member })
  @ApiQuery({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOperation({
    summary: 'Update a member by its id.',
  })
  update(@Body() member: Member, @Query() query: { id: string }) {
    return this.memberService.update(query.id, member);
  }
}
