const Joi = require("joi");

//function to validate course
var validateBook = function validateBook(book) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    price: Joi.string()
    .min(2)
    .required(),
  };

  return Joi.validate(book, schema);
};

module.exports = {
  validateBook: validateBook,
};
