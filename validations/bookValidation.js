const Joi = require("joi");

//function to validate course
var validateBook = function validateBook(book) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
  };

  return Joi.validate(book, schema);
};

module.exports = {
  validateBook: validateBook,
};
