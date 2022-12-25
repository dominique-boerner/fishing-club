import { Controller, Get, Logger } from '@nestjs/common';
import { MemberService } from '../services/member.service';
import { Member } from '@fishing-club/fishing-club-types';

/**
 * MemberController
 * @description - A controller which handles CRUD operations
 *                for members.
 */
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('')
  getAllMembers(): Member[] {
    Logger.log('Get all members', MemberController.name);
    return this.memberService.getAllMembers();
  }
}
