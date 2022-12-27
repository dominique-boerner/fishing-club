import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseOk } from '../../../reponses/response-ok';
import { Lake, LakeDocument } from '../dto/lake.dto';

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
    return new ResponseOk();
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
   * @param id
   */
  async delete(id: string) {
    if (!id) {
      Logger.error('Delete lake: no id given', LakeService.name);
      throw new HttpException('No id given', HttpStatus.BAD_REQUEST);
    }
    Logger.log(`Delete lake with id ${id}`, LakeService.name);
    await this.lakeModel.deleteOne({ _id: id });
    return new ResponseOk();
  }

  /**
   * @description - Update a lake by its id.
   * @param identifier - identifier of the lake to update
   * @param lake - the new lake
   */
  async update(identifier: string, lake: Lake) {
    this.lakeModel.findByIdAndUpdate(identifier, lake, (err) => {
      if (err) {
        Logger.error(err);
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }
    });
    return new ResponseOk();
  }
}
