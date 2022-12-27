import { LakeService } from './lake.service';
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Lake } from '../dto/lake.dto';
import { lakeMock, lakeUpdateMock } from '../../../mocks/lake.mock';
import { HydratedDocument } from 'mongoose';
import { ResponseOk } from '../../../reponses/response-ok';
import { HttpException, HttpStatus } from '@nestjs/common';

// we need to define a mocked LakeModel which implements the mongoose methods
// we are using.
class LakeModel {
  constructor(private data) {}

  // save is unused, but the implementation of mongoose needs it.
  save = jest.fn().mockResolvedValue(this.data);
  static find = jest.fn().mockResolvedValue([lakeMock]);
  static countDocuments = jest.fn().mockResolvedValue(1);
  static findOne = jest.fn().mockResolvedValue(lakeMock);
  static findByIdAndUpdate = jest.fn().mockResolvedValue(lakeMock);
  static deleteOne = jest.fn().mockResolvedValue(true);
}

describe('LakeService', () => {
  let service: LakeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LakeService,
        {
          provide: getModelToken(Lake.name),
          useValue: LakeModel,
        },
      ],
    }).compile();

    service = module.get(LakeService);
  });

  it('should create a new lake', async () => {
    const response = await service.create(lakeMock as HydratedDocument<Lake>);
    expect(response).toStrictEqual(new ResponseOk());
  });

  it('should get all lakes', async () => {
    const response = await service.getAllLakes();
    expect(response).toStrictEqual([lakeMock]);
  });

  it('should count all lakes', async () => {
    const response = await service.countLakes();
    expect(response).toStrictEqual(1);
  });

  it('should delete a lake by its id', async () => {
    const response = await service.delete(
      '007f37a4-a2db-4b52-9ef6-cfbe457ba9e4'
    );
    expect(response).toStrictEqual(new ResponseOk());
  });

  it('should delete a lake by its id -- no id given', async () => {
    try {
      await service.delete(undefined);
    } catch (e) {
      expect(e).toStrictEqual(
        new HttpException('No id given', HttpStatus.BAD_REQUEST)
      );
    }
  });

  it('should update a lake', async () => {
    const response = await service.update(
      '007f37a4-a2db-4b52-9ef6-cfbe457ba9e4',
      lakeUpdateMock
    );
    expect(response).toStrictEqual(new ResponseOk());
  });
});
