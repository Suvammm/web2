const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/books');

// GET all books
router.get('/', getAllBooks);

// GET a single book by ID
router.get('/:id', getBookById);

// POST a new book
router.post('/', createBook);

// PUT (update) an existing book
router.put('/:id', updateBook);

// DELETE a book
router.delete('/:id', deleteBook);

module.exports = router;