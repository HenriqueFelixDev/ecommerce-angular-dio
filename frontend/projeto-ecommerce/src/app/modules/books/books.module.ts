import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BooksService } from "./services/books.service";
import { BookListComponent } from "./views/book-list/book-list.component";
import { BookItemComponent } from "./components/book-item/book-item.component";
import { BooksFilterComponent } from "./components/books-filter/books-filter.component";

@NgModule({
    declarations: [
        BookListComponent,
        BookItemComponent,
        BooksFilterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([
            { path: 'books', component: BookListComponent }
        ]),
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule,
        MatProgressSpinnerModule,
    ],
    providers: [BooksService]
})
export class BooksModule { }