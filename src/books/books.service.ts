import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books = []; // Aquí almacenaremos los libros en memoria

  async findAll(): Promise<any[]> {
    return this.books;
  }

  async create(createBookDto: CreateBookDto): Promise<any> {
    this.books.push(createBookDto);
    return createBookDto;
  }
}
