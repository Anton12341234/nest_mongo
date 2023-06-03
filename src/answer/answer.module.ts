import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import {Answer, AnswerSchema} from './answer.schema'
import { Survey, SurveySchema } from 'src/surveys/surveys.schema';
import { SurveysModule } from 'src/surveys/surveys.module';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Answer.name, schema: AnswerSchema},
    {name: Survey.name, schema: SurveySchema}
  ]),
  SurveysModule],
  exports: [AnswerService],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}