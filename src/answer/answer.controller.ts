import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import {AnswerService} from './answer.service'
import { Answer } from './answer.schema';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { MyAnswerDto } from './dto/my-answer.dto';

@Controller('answer')
export class AnswerController {

    constructor(private readonly answerService:AnswerService ){}

    @Get(':id')
    getAll(@Param('id') id) {
        return this.answerService.getAll(id)
    }

    @Post('/my')
    getMyAnswer(@Body() dto: MyAnswerDto) {
        return this.answerService.getMyAnswer(dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.answerService.remove(id)
    }

    @Post()
    create(@Body() dto: CreateAnswerDto){
      return this.answerService.createAnswer(dto)
    }
}
