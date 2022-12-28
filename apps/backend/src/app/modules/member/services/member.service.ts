import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member, MemberDocument } from '../dto/member.dto';
import { ResponseOk } from '../../../reponses/response-ok';

/**
 * MemberService
 *
 * @description - This service handles CRUD operations for members.
 */
@Injectable()
export class MemberService {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<MemberDocument>
  ) {}

  /**
   * @description - Create a new member and save it into the database.
   * @param member - Member to create
   */
  async create(member: Member) {
    Logger.log(`Create a new member`, MemberService.name);
    const model = new this.memberModel({ ...member });
    await model.save();
    return new ResponseOk();
  }

  /**
   * @description - Get every member from the database.
   */
  async getAllMembers() {
    Logger.log(`Get all members`, MemberService.name);
    return this.memberModel.find({});
  }

  /**
   * @description - returns the amount of members from the database.
   */
  async countMembers() {
    Logger.log(`Count all members`, MemberService.name);
    return this.memberModel.countDocuments();
  }

  /**
   * @description - remove a member from the database.
   * @param id
   */
  async delete(id: string | undefined) {
    if (!id) {
      Logger.error('Delete member: no id given', MemberService.name);
      throw new HttpException('No id given', HttpStatus.BAD_REQUEST);
    }
    Logger.log(`Delete member with id ${id}`, MemberService.name);
    await this.memberModel.deleteOne({ _id: id });
    return new ResponseOk();
  }

  /**
   * @description - Update a member by its id.
   * @param identifier - identifier of the member to update
   * @param member - the new member
   */
  async update(identifier: string, member: Member) {
    this.memberModel.findByIdAndUpdate(identifier, member, (err) => {
      if (err) {
        Logger.error(err);
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }
    });
    return new ResponseOk();
  }
}
