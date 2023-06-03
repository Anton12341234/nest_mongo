import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {User, UserDocument} from './users.schema'
import {Model} from 'mongoose'
import {CreateUserDto} from './dto/create-user.dto'
import {RolesService} from '../roles/roles.service'


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument> ,
        private roleService: RolesService) {}
    
    async getAll(): Promise<User[]> {
        const users = this.userModel.find()
        return users;
    }

    async getOne(id: string): Promise<User> {
        const user = this.userModel.findOne({_id:id})
        return user;
    }

    async createUser(dto: CreateUserDto) {
        const role = await this.roleService.getRoleByValue("USER")
        const dtoUpdate = {...dto, roles:role.value}
        const user = await this.userModel.create(dtoUpdate);
        await user.$set('roles', [role.id])
        return user
    }

    async getUserByUsername(username: string) {
        const user = await this.userModel.findOne({username:username})
        return user;
    }
}
