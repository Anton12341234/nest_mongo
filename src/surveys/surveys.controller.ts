import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './dto/create-survey.dto';

@Controller('surveys')
export class SurveysController {

    constructor(private readonly surveysService:SurveysService ){}

    @Get()
    getAll() {
        return this.surveysService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id) {
        return this.surveysService.getOne(id)
    }

    @Post()
    create(@Body() dto: CreateSurveyDto){
      return this.surveysService.createSurvey(dto)
    }

}
