const express = require('express');
const Book = require('../models/Book');
const bookValidation = require('../validations/bookValidation');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', (req, res) => {
  bookController.getBooks((err, books) => {
    if (err) return res.status(400).send(err.details[0].message);
    res.append('Last-Modified', (new Date()).toUTCString());
    res.json(books);
  });
});

// GET Book by Id Request
router.get('/:_id', (req, res) => {
  bookController.getBookById(req.params._id, (err, book) => {
    if (!book) {
      return res.status(404).send(`The book whit this ID: ${req.params._id} was not found`);
    }
    res.json(book);
  });
});

// //POST Book
router.post('/', (req, res, next) => {
  const book = req.body;
  const { error } = bookValidation.validateBook(book);
  if (error) return res.status(400).send(error.details[0].message);

  bookController.addBook(book, (err, book) => {
    if (err) return res.status(400).send(err.message);
    res.json(book, req.params.name, req.params.price, req.params.barcode);
    return next();
  });
});

// PUT Book
router.put('/:_id', (req, res) => {
  const id = req.params._id;
  const book = req.body;
  const { error } = bookValidation.validateBook(book);
  if (error) return res.status(400).send(error.details[0].message);

  bookController.updateBook(id, book, {}, (err, book) => {
    if (err) return res.status(400).send(err.message);
    res.json('Book updated successfully');
  });
});

// DELETE Book
router.delete('/:_id', (req, res) => {
  const id = req.params._id;
  bookController.deleteBook(id, (err, book) => {
    if (err) return res.status(400).send(err.message);
    res.send(`Book with id: ${id} was deleted successfully`);
  });
});

// Routes related to actor.

module.exports = router;
