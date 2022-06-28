import { Category } from "../../entities/category";
import { ICategoriesRepository } from "./icategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
    getCategories(): Promise<Category[]> {
        return new Promise((resolve, reject) => {
            resolve([
                childrenCategory,
                computerScienceCategory,
                musicCategory,
                historyCategory
            ])
        })
    }
}

export {
    childrenCategory,
    computerScienceCategory,
    musicCategory,
    historyCategory
}

const childrenCategory = { id: '4bcf70a0-f658-11ec-b939-0242ac120002', name: 'Literatura Infantil', icon: { dark: 'https://i.imgur.com/GUTU2rX.png', light: 'https://i.imgur.com/L7kJDiL.png' } }
const computerScienceCategory = { id: '4bcf733e-f658-11ec-b939-0242ac120002', name: 'Ciência da Computação', icon: { dark: 'https://i.imgur.com/dmdtMnk.png', light: 'https://i.imgur.com/ToXFOUj.png' } }
const musicCategory = { id: '4bcf7488-f658-11ec-b939-0242ac120002', name: 'Música', icon: { dark: 'https://i.imgur.com/lN15gZO.png', light: 'https://i.imgur.com/TL6Aarh.png' } }
const historyCategory = { id: '4bcf75c8-f658-11ec-b939-0242ac120002', name: 'História', icon: { dark: 'https://i.imgur.com/5Ky8RY0.png', light: 'https://i.imgur.com/WdHSgn8.png' } }
