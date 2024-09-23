const { express } = require("express");
const Book = require("../models/books");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ data: books });
  } catch (error) {
    next(error);
  }
};
const createABook = async (request, response, next) => {
  try {
    if (request.file) {
      request.body.image = request.file.path;
    }
    const newBook = await Book.create(request.body);
    return response.status(201).json({ data: newBook });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getBookById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const foundbook = await Book.findById(id);
    return response.status(200).json({ data: foundbook });
  } catch (error) {
    next(error);
  }
};
const modifyBook = async (request, response, next) => {
  try {
    const updatedbook = await Book.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    if (!updatedbook)
      return response.status(404).json({ msg: "book not found" });
    return response.status(200).json({ data: updatedbook });
  } catch (error) {
    next(error);
  }
};
const deletebook = async (request, response, next) => {
  try {
    const deletedbook = await Book.findByIdAndDelete(request.params.id);
    if (!deletebook)
      return response.status(404).json({ msg: "book not found" });
    return response.status(200).json({ data: deletedbook });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createABook,
  modifyBook,
  deletebook,
};
