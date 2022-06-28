import { Book } from "../../entities/book";
import { BookSearchOptions } from "../../entities/bookSearchOptions";

export interface IBooksRepository {
    getBooks(options?: BookSearchOptions): Promise<Book[]>
}