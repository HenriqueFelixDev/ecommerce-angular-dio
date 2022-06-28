import { BookSearchOptions } from "../../entities/bookSearchOptions";
import { BooksResult } from "../../entities/booksResult";

export interface IBooksService {
    getBooks(options: BookSearchOptions): Promise<BooksResult>
}