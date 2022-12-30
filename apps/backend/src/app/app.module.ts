import { Module } from '@nestjs/common';
import { MemberModule } from './modules/member/member.module';
import { LakeModule } from './modules/lakes/lake.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from "../environments/environment";

@Module({
  imports: [
    MemberModule,
    LakeModule,
    MongooseModule.forRoot(
      `mongodb://${environment.database.ip}:${environment.database.port}`,
      {
        dbName: 'fishing_club',
        auth: {
          username: 'root',
          password: 'example',
        },
      }
    ),
  ],
})
export class AppModule {}
