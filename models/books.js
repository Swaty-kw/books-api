const { Schema, model } = require("mongoose");
const BookSchema = new Schema({
  BookTitle: {
    type: String,
    required: true,
  },
  BookAuthor: {
    type: String,
    required: true,
  },
  BookPrice: {
    type: Number,
    default: 5,
  },
  BookImage: {
    type: String,
    default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&psig=AOvVaw3b2fmzmSZOrwZIMFoNihPw&ust=1727113479414000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiio52N14gDFQAAAAAdAAAAABAE"
  },
});
const Book = model("book", BookSchema);
module.exports = Book;
