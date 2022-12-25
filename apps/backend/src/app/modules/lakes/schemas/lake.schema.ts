import { Fish, Lake as ILake } from '@fishing-club/fishing-club-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LakeDocument = HydratedDocument<Lake>;

@Schema()
export class Lake implements ILake {

  @Prop({ required: true })
  name: string;

  @Prop(String)
  img: string;

  @Prop([String])
  fishSpecies: Fish[];

}

export const LakeSchema = SchemaFactory.createForClass(Lake);
