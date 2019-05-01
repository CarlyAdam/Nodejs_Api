const mongoose = require('mongoose');

// conect to Mongoose

const databaseConnection = () => {
  mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true });
};

module.exports = {
  databaseConnection,
};
