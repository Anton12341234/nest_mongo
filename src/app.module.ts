import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {AnswerModule} from './answer/answer.module'
import {UsersModule} from './users/users.module'
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { SurveysModule } from './surveys/surveys.module';

@Module({
  imports: [
    AnswerModule,
    UsersModule, 
    AuthModule, 
    RolesModule, 
    SurveysModule,
    MongooseModule.forRoot('mongodb+srv://anton:0932304567@cluster0.j8curid.mongodb.net/?retryWrites=true')],
  controllers: [],
  providers: [],
})
export class AppModule {}
