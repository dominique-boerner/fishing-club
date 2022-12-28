import { Module } from "@nestjs/common";
import { MemberController } from "./controller/member.controller";
import { MemberService } from "./services/member.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Member, MemberDto } from "./dto/member.dto";

/**
 * Imports
 */
const imports = [
  MongooseModule.forFeature([{ name: Member.name, schema: MemberDto }]),
];

/**
 * Controller definitions
 */
const controllers = [MemberController];

/**
 * Provider definitions
 */
const providers = [MemberService];

/**
 * MemberModule
 *
 * This module contains every controller and service which
 * are related to members.
 */
@Module({
  imports,
  providers,
  controllers,
})
export class MemberModule {}
