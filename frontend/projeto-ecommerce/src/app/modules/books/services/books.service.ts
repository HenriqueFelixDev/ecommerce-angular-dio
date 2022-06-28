import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { environment } from '../../../../environments/environment'
import { BooksResult } from "../models/booksResult";
import { BookSearchOptions } from "../models/bookSearchOptions";
import { Category } from "../models/category";

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    constructor(private httpClient: HttpClient) { }

    getBooks(options: BookSearchOptions): Observable<BooksResult> {
        let queryParams = ''

        options.search && (queryParams += `search=${options.search}&`)
        options.minPrice && (queryParams += `minPrice=${options.minPrice}&`)
        options.maxPrice && (queryParams += `maxPrice=${options.maxPrice}&`)
        options.categoryId && (queryParams += `categoryId=${options.categoryId}&`)

        // .slice(0, -1) remove o último caractere da string que pode ser
        // ? caso não tenha nenhum query param (queryParams for vazio) ou
        // & caso possua algum query param (pois todos os itens terminam em &)
        const url = `${environment.apiURL}/books?${queryParams}`.slice(0, -1)

        return this.httpClient.get<BooksResult>(url)
    }

    getCategories(): Observable<Array<Category>> {
        return this.httpClient.get<Array<Category>>(`${environment.apiURL}/categories`)
    }
}