import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BookSearchOptions } from "../../models/bookSearchOptions";
import { Category } from "../../models/category";

@Component({
    selector: 'app-books-filter',
    templateUrl: './books-filter.component.html'
})
export class BooksFilterComponent {
    @Input() categories: Array<Category> = []
    @Output() onApply = new EventEmitter
    options: BookSearchOptions = {}

    onApplyClick(): void {
        this.onApply.emit(this.options)
    }

    resetForm(): void {
        this.options =  {}
        this.onApplyClick()
    }
}