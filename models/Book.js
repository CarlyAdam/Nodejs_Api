const mongoose = require("mongoose");

//Book Schema
const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Book = (module.exports = mongoose.model("Book", bookSchema));
