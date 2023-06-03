import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { Survey, SurveyDocument } from './surveys.schema';

@Injectable()
export class SurveysService {

    constructor(@InjectModel(Survey.name) private surveyModel: Model<SurveyDocument>) {}

    async createSurvey(dto) {
        const survey = await this.surveyModel.create(dto);
        return survey
    }

    async getAll(): Promise<Survey[]> {
        const survey = this.surveyModel.find()
        return survey;
    }

    async getOne(id): Promise<Survey> {
        const survey = this.surveyModel.findById(id)
        return survey;
    }

    async Remove(id): Promise<Survey> {
        return this.surveyModel.findOneAndRemove({_id:id})
    }
}
