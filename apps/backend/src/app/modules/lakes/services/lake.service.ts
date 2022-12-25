import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Lake, LakeDocument } from '../schemas/lake.schema';
import { Model } from 'mongoose';

@Injectable()
export class LakeService {
  constructor(@InjectModel(Lake.name) private lakeModel: Model<LakeDocument>) {}

  async getAllLakes() {
    return this.lakeModel.find({});
  }

  async countLakes() {
    return this.lakeModel.countDocuments()
  }
}
