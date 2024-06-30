import { Controller, Get, Post, Body } from '@nestjs/common';
import { BffService } from './bff.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('bff')
export class BffController {
  constructor(private readonly bffService: BffService) {}

  @Post('users')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.bffService.createUser(createUserDto);
  }

  @Get('users')
  async getAllUsers() {
    return this.bffService.getAllUsers();
  }

  @Post('books')
  async createBook(@Body() createBookDto: CreateBookDto) {
    return this.bffService.createBook(createBookDto);
  }

  @Get('books')
  async getAllBooks() {
    return this.bffService.getAllBooks();
  }
}
