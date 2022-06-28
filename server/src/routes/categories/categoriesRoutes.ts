import { Router } from 'express'
import { CategoriesRepository } from '../../repositories/categories/categoriesRepository'
import { CategoriesService } from '../../services/categories/categoriesService'

const router = Router()
const categoriesService = new CategoriesService(new CategoriesRepository())

router.get('/categories', async (req, res) => {
    const categories = await categoriesService.getCategories()
    return res.json(categories)
})

export default router