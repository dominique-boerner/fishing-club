import { Module } from '@nestjs/common';
import { LakeController } from './controller/lake.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Lake, LakeSchema } from "./schemas/lake.schema";
import { LakeService } from "./services/lake.service";

/**
 * Imports
 */
const imports = [
  MongooseModule.forFeature([{ name: Lake.name, schema: LakeSchema }]),
];

/**
 * Controller definitions
 */
const controllers = [LakeController];

/**
 * Provider definitions
 */
const providers = [LakeService];

/**
 * LakeModule
 *
 * This module contains every controller and service which
 * are related to lakes.
 */
@Module({
  imports,
  providers,
  controllers,
})
export class LakeModule {}
