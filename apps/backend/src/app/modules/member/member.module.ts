import { Module } from '@nestjs/common';
import { MemberController } from './controller/member.controller';
import { MemberService } from './services/member.service';

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
  providers,
  controllers,
})
export class MemberModule {}
