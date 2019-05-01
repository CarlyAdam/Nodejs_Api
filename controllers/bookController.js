const Book = require("../models/Book");

//get Books
var getBooks = function(callback, limit) {
  Book.find(callback).limit(limit);
};

//get Book by id
var getBookById = function(id, callback) {
  Book.findById(id, callback);
};

//add Book
var addBook = function(book, callback) {
  Book.create(book, callback);
};

//update Book
var updateBook = function(id, book, options, callback) {
  var query = { _id: id };
  var update = {
    name: book.name,
  };
  Book.findOneAndUpdate(query, update, options, callback);
};

//delete Book
var deleteBook = function(id, callback) {
  var query = { _id: id };
  Book.remove(query, callback);
};

module.exports = {
  getBooks: getBooks,
  getBookById: getBookById,
  addBook: addBook,
  updateBook: updateBook,
  deleteBook: deleteBook,
};
