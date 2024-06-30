import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = []; // Aquí almacenaremos los usuarios en memoria

  async findAll(): Promise<any[]> {
    return this.users;
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    this.users.push(createUserDto);
    return createUserDto;
  }
}
