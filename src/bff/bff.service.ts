import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BffService {
  private readonly apiBaseUrl = 'http://localhost:3000'; // URL de tu API

  constructor(private readonly httpService: HttpService) {}

  async createUser(createUserDto: CreateUserDto) {
    const response = await this.httpService.post(`${this.apiBaseUrl}/users`, createUserDto).toPromise();
    return response.data;
  }

  async getAllUsers() {
    const response = await this.httpService.get(`${this.apiBaseUrl}/users`).toPromise();
    return response.data;
  }

  async createBook(createBookDto: CreateBookDto) {
    const response = await this.httpService.post(`${this.apiBaseUrl}/books`, createBookDto).toPromise();
    return response.data;
  }

  async getAllBooks() {
    const response = await this.httpService.get(`${this.apiBaseUrl}/books`).toPromise();
    return response.data;
  }
}
