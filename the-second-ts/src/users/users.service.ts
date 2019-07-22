import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult} from 'typeorm'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}
    async  findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async  create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
}
