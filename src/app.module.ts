import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { BffModule } from './bff/bff.module';

@Module({
  imports: [
    UsersModule,
    BooksModule,
    BffModule,
  ],
})
export class AppModule {}
