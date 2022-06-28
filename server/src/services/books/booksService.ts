import { BookSearchOptions } from "../../entities/bookSearchOptions";
import { BooksResult } from "../../entities/booksResult";
import { IBooksRepository } from "../../repositories/books/ibooksRepository";
import { IBooksService } from "./ibooksService";

export class BooksService implements IBooksService {
    constructor(private booksRepository: IBooksRepository) {}

    async getBooks(options: BookSearchOptions): Promise<BooksResult> {
        const books = await this.booksRepository.getBooks(options)
        
        return {
            pages: 1,
            currentPage: 1,
            totalItems: books.length,
            books
        }
    }
}