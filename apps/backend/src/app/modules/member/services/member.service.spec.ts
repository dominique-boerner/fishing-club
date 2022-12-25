import { MemberService } from './member.service';

describe('MemberService', () => {
  let memberService: MemberService;

  beforeEach(() => {
    memberService = new MemberService();
  });

  it('should get every member', () => {
    const result = [];
    expect(memberService.getAllMembers()).toEqual(result);
  });
});
