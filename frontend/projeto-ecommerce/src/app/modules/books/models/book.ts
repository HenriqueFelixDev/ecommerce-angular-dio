import { Category } from "./category"

export interface Book {
    id: string
    banner: string
    url: string
    title: string
    author: string
    category: Category
    quantity: number
    price: number
}