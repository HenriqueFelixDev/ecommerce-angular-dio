import { Component, OnInit } from "@angular/core";
import { BookSearchOptions } from "../../models/bookSearchOptions";
import { BooksResult } from "../../models/booksResult";
import { Category } from "../../models/category";
import { BooksService } from "../../services/books.service";

@Component({
    templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
    isLoading: boolean = false
    booksResult?: BooksResult
    categories: Array<Category> = []
    options: BookSearchOptions = {}

    constructor(private booksService: BooksService) {}

    ngOnInit(): void {
        this.searchBooks()
        this.getCategories()
    }

    getCategories(): void {
        this.booksService.getCategories().subscribe(categories => {
            this.categories = categories
        })
    }

    searchBooks(): void {
        this.isLoading = true

        this.booksService.getBooks(this.options).subscribe({
            next: booksResult => this.booksResult = booksResult,
            complete: () => this.isLoading = false,
            error: (error) => console.log(error)
        })
    }

    onApplyClick(options: BookSearchOptions): void {
        this.options = options
        this.searchBooks()
    }
}