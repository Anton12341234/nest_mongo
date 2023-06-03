import { Injectable } from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import { InjectModel } from '@nestjs/mongoose';
import {Role, RoleDocument} from "./roles.schema";
import {Model} from 'mongoose'

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role.name) private userModel: Model<RoleDocument>) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.userModel.create(dto);
        return role;
    }

    async getRoleByValue(value: string) {
        const role = await this.userModel.findOne({value: value})
        return role;
    }

}
