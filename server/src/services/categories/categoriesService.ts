import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/categories/icategoriesRepository";
import { ICategoriesService } from "./icategoriesService";

export class CategoriesService implements ICategoriesService {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    getCategories(): Promise<Category[]> {
        return this.categoriesRepository.getCategories()
    }
}