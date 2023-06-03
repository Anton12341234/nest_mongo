import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Answer, AnswerDocument} from './answer.schema'
import {Model} from 'mongoose'
import { SurveysService } from 'src/surveys/surveys.service';

@Injectable()
export class AnswerService {

    constructor(@InjectModel(Answer.name) private answerModel: Model<AnswerDocument>,
    private surveysService: SurveysService) {}
    
    async createAnswer(dto): Promise<Answer> {
        const createdAnswer = this.answerModel.create(dto);
        return createdAnswer;
    }

    async getAll(id): Promise<Answer[]> {
        const answers = this.answerModel.find({idQuestion:id})
        return answers;
    }

    async getMyAnswer(dto){
        const myAnswer = this.answerModel.find({$and : [{idQuestion: dto.id}, {owner: dto.username}]})
        return myAnswer;
    }

    async remove(id: string) {
        this.surveysService.Remove(id)
        return this.answerModel.deleteMany({idQuestion:id})
    }
}
