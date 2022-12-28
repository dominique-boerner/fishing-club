import {
  Birthdate,
  Contact,
  Member as IMember,
  Name,
  Notes,
  Residence,
  WorkingHours,
} from '@fishing-club/fishing-club-types';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type MemberDocument = HydratedDocument<Member>;

@Schema()
export class Member implements IMember {
  @ApiProperty()
  name: Name;

  @ApiProperty()
  birthdate: Birthdate;

  @ApiProperty()
  residence: Residence;

  @ApiProperty()
  workingHours: WorkingHours[];

  @ApiProperty()
  contact: Contact;

  @ApiProperty()
  notes: Notes;
}

export const MemberDto = SchemaFactory.createForClass(Member);
