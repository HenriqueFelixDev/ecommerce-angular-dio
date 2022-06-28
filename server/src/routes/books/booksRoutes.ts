import { Router } from 'express'
import { BooksRepository } from '../../repositories/books/booksRepository'
import { BooksService } from '../../services/books/booksService'

const router = Router()
const booksService = new BooksService(new BooksRepository())

router.get('/books', async (req, res) => {
    const {
        search,
        minPrice,
        maxPrice,
        categoryId
    } = req.query

    const books = await booksService.getBooks({
        search: search as string,
        minPrice: +(minPrice ?? ''),
        maxPrice: +(maxPrice ?? ''),
        categoryId: categoryId as string
    })

    return res.json(books)
})

export default router