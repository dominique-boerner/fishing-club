import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lake, LakeDocument } from '../schemas/lake.schema';
import { Model } from 'mongoose';

/**
 * LakeService
 *
 * @description - This service handles CRUD operations for lakes.
 */
@Injectable()
export class LakeService {
  constructor(@InjectModel(Lake.name) private lakeModel: Model<LakeDocument>) {}

  /**
   * @description - Create a new lake and save it into the database.
   * @param lake - Lake to create
   */
  async create(lake: LakeDocument) {
    Logger.log(`Create a new lake`, LakeService.name);
    const model = new this.lakeModel({ ...lake });
    await model.save();
    return this.getAllLakes();
  }

  /**
   * @description - Get every lake from the database.
   */
  async getAllLakes() {
    Logger.log(`Get all lakes`, LakeService.name);
    return this.lakeModel.find({});
  }

  /**
   * @description - returns the amount of lakes from the database.
   */
  async countLakes() {
    Logger.log(`Count all lakes`, LakeService.name);
    return this.lakeModel.countDocuments();
  }

  /**
   * @description - remove a lake from the database.
   * @param name
   */
  async delete(name: string) {
    Logger.log(`Delete lake with name ${name}`, LakeService.name);
    await this.lakeModel.find({ name }).deleteMany();
    return this.getAllLakes();
  }
}
