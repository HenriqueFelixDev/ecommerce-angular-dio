import { Category } from "../../entities/category";

export interface ICategoriesService {
    getCategories(): Promise<Category[]>
}