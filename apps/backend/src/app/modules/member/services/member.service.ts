import { Injectable } from '@nestjs/common';
import { Member } from '@fishing-club/fishing-club-types';

@Injectable()
export class MemberService {
  getAllMembers(): Member[] {
    return [];
  }
}
