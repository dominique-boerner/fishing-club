import { Module } from '@nestjs/common';
import { MemberModule } from './modules/member/member.module';
import { LakeModule } from './modules/lakes/lake.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MemberModule,
    LakeModule,
    MongooseModule.forRoot('mongodb://0.0.0.0:3306', {
      dbName: "fishing_club",
      auth: {
        username: "root",
        password: "example"
      }
    }),
  ],
})
export class AppModule {}
