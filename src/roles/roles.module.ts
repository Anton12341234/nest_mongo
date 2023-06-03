import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './roles.schema';
import { User, UserSchema } from 'src/users/users.schema';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [MongooseModule.forFeature([
    {name: Role.name, schema: RoleSchema},
    {name: User.name, schema: UserSchema}
  ])],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
