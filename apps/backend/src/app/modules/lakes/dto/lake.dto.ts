import { Fish, Lake as ILake } from '@fishing-club/fishing-club-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type LakeDocument = HydratedDocument<Lake>;

@Schema()
export class Lake implements ILake {
  @ApiProperty()
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @Prop(String)
  img: string;

  @ApiProperty()
  @Prop([String])
  fishSpecies: Fish[];
}

export const LakeDto = SchemaFactory.createForClass(Lake);
