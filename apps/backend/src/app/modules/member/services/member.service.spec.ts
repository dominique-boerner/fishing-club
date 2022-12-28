import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { ResponseOk } from "../../../reponses/response-ok";
import { HttpException, HttpStatus } from "@nestjs/common";
import { MemberService } from "./member.service";
import { memberMock, memberUpdateMock } from "../../../mocks/member.mock";
import { Member } from "../dto/member.dto";

// we need to define a mocked MockMemberModel which implements the mongoose methods
// we are using.
class MockMemberModel {
  constructor(private data) {}

  // save is unused, but the implementation of mongoose needs it.
  save = jest.fn().mockResolvedValue(this.data);
  static find = jest.fn().mockResolvedValue([memberMock]);
  static countDocuments = jest.fn().mockResolvedValue(1);
  static findOne = jest.fn().mockResolvedValue(memberMock);
  static findByIdAndUpdate = jest.fn().mockResolvedValue(memberMock);
  static deleteOne = jest.fn().mockResolvedValue(true);
}

describe('MemberService', () => {
  let service: MemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MemberService,
        {
          provide: getModelToken(Member.name),
          useValue: MockMemberModel,
        },
      ],
    }).compile();

    service = module.get(MemberService);
  });

  it('should create a new member', async () => {
    const response = await service.create(memberMock as HydratedDocument<Member>);
    expect(response).toStrictEqual(new ResponseOk());
  });

  it('should get all members', async () => {
    const response = await service.getAllMembers();
    expect(response).toStrictEqual([memberMock]);
  });

  it('should count all members', async () => {
    const response = await service.countMembers();
    expect(response).toStrictEqual(1);
  });

  it('should delete a member by its id', async () => {
    const response = await service.delete(
      '007f37a4-a2db-4b52-9ef6-cfbe457ba9e4'
    );
    expect(response).toStrictEqual(new ResponseOk());
  });

  it('should delete a member by its id -- no id given', async () => {
    try {
      await service.delete(undefined);
    } catch (e) {
      expect(e).toStrictEqual(
        new HttpException('No id given', HttpStatus.BAD_REQUEST)
      );
    }
  });

  it('should update a member', async () => {
    const response = await service.update(
      '007f37a4-a2db-4b52-9ef6-cfbe457ba9e4',
      memberUpdateMock
    );
    expect(response).toStrictEqual(new ResponseOk());
  });
});
