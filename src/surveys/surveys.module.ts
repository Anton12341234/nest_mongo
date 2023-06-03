import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveysController } from './surveys.controller';
import { SurveysService } from './surveys.service';
import { Survey, SurveySchema } from './surveys.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Survey.name, schema: SurveySchema}
  ])],
  exports: [
    SurveysService
  ],
  controllers: [SurveysController],
  providers: [SurveysService],
})
export class SurveysModule {}
