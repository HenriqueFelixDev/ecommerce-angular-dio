import { Book } from "../../entities/book";
import { BookSearchOptions } from "../../entities/bookSearchOptions";
import { childrenCategory, computerScienceCategory, historyCategory, musicCategory } from "../categories/categoriesRepository";
import { IBooksRepository } from "./ibooksRepository";

export class BooksRepository implements IBooksRepository {
    getBooks(options: BookSearchOptions): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            const filteredBooks = BOOKS.filter(book => {
                const titleMatches = !options.search || book.title.toLowerCase().includes(options.search.toLowerCase())
                const minpriceMatches = !options.minPrice || book.price >= options.minPrice
                const maxpriceMatches = !options.maxPrice || book.price <= options.maxPrice
                const categoryMatches = !options.categoryId || book.category.id === options.categoryId
                return titleMatches && minpriceMatches && maxpriceMatches && categoryMatches
            })

            resolve(filteredBooks)
        })
    }
}

const BOOKS: Book[] = [
    { id: '286832ac-f656-11ec-b939-0242ac120002', title: 'A Bruxa e o Caldeirão', author: 'José Leon Machado', category: childrenCategory, price: 19.99, quantity: 87, url: 'http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=4978', banner: 'https://i.imgur.com/KdnxADb.jpg' },
    { id: '286834f0-f656-11ec-b939-0242ac120002', title: 'A borboleta azul', author: 'Lenira Almeida Heck', category: childrenCategory, price: 123.5, quantity: 45, url: 'http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=28982', banner: 'https://i.imgur.com/rXZjPE9.jpg' },
    { id: '2868368a-f656-11ec-b939-0242ac120002', title: 'No reino das letras felizes', author: 'Lenira Almeida Heck', category: childrenCategory, price: 88.90, quantity: 25, url: 'http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=53489', banner: 'https://i.imgur.com/yzXGB5z.jpg' },
    { id: '286837d4-f656-11ec-b939-0242ac120002', title: 'Apostila OpenOffice - Planilha Eletrônica', author: 'Walter Antônio Duarte Filho', category: computerScienceCategory, price: 73.50, quantity: 32, url: 'http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=4798', banner: 'https://i.imgur.com/gmhWQKh.jpg' },
    { id: '286838c4-f656-11ec-b939-0242ac120002', title: 'Curso de Linux', author: 'Serviço Nacional de Aprendizagem Industrial - SENAI', category: computerScienceCategory, price: 29.99, quantity: 12, url: 'http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=16743', banner: 'https://i.imgur.com/xuswqzp.jpg' },
    { id: '286839f0-f656-11ec-b939-0242ac120002', title: 'Música da corte do Brasil', author: 'Maurício Monteiro', category: musicCategory, price: 8.99, quantity: 89, url: 'http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=88579', banner: 'https://i.imgur.com/OqWbGmw.jpg' },
    { id: '28683ae0-f656-11ec-b939-0242ac120002', title: 'A rádio nacional', author: 'Sérgio Cabral', category: musicCategory, price: 29.99, quantity: 95, url: 'http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=88469', banner: 'https://i.imgur.com/xSECHmm.jpg' },
    { id: '28683c20-f656-11ec-b939-0242ac120002', title: 'A escravidão', author: 'Joaquim Nabuco', category: historyCategory, price: 14.99, quantity: 103, url: 'http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=15713', banner: 'https://i.imgur.com/JClaeH3.jpg' },
    { id: '28683d9c-f656-11ec-b939-0242ac120002', title: 'O Rio de Janeiro no tempo dos vice-reis', author: 'Luís Edmundo', category: historyCategory, price: 189.90, quantity: 61, url: 'http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=19323', banner: 'https://i.imgur.com/GThFR5e.jpg' },
    { id: '28683f04-f656-11ec-b939-0242ac120002', title: 'Modernização urbana na belle époque paulista', author: 'Fransérgio Follis', category: historyCategory, price: 215.90, quantity: 5, url: 'http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=17930', banner: 'https://i.imgur.com/7zAYV2l.jpg' },
]