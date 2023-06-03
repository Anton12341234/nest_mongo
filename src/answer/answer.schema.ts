import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnswerDocument = Answer & Document

@Schema()
export class Answer {
  @Prop()
  idQuestion: string;

  @Prop()
  owner: string;

  @Prop()
  answer1: string;

  @Prop()
  answer2: string;

  @Prop()
  answer3: string;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);