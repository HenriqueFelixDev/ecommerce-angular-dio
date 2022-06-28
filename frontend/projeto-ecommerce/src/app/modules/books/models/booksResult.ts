import { Book } from "./book"

export interface BooksResult {
    pages: number
    currentPage: number
    totalItems: number
    books: Array<Book>
}