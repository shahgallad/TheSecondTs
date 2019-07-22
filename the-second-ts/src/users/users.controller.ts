import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Post, Body, Param } from  '@nestjs/common';

@Controller('userlist')
export class UsersController {
    constructor(private usersService: UsersService){}
    @Get()
    index(): Promise<User[]>{
        return this.usersService.findAll()
    }

    @Post('adduser')
    async create(@Body() userData: User): Promise<any> {
      userData.created_at = Date()   
      return this.usersService.create(userData);
    }
}
