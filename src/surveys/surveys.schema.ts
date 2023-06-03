import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SurveyDocument = Survey & Document

@Schema()
export class Survey {
  @Prop()
  title: string;

  @Prop()
  question1: string;

  @Prop()
  question2: string;

  @Prop()
  question3: string;

}

export const SurveySchema = SchemaFactory.createForClass(Survey);