const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  isbn: String,
  publishYear: Number,
  copiesAvailable: { type: Number, default: 1 }
});

module.exports = mongoose.model('Book', bookSchema);