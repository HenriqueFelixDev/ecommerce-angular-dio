import { Category } from "../../entities/category";

export interface ICategoriesRepository {
    getCategories(): Promise<Category[]>
}