const express = require("express");
const bookRouter = express.Router();
const upload = require("../Middleware/multer");

const {
  getAllBooks,
  getBookById,
  createABook,
  modifyBook,
  deletebook,
} = require("./books.controller");

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookById);
bookRouter.post("/", upload.single("image"), createABook);
bookRouter.put("/:id", modifyBook);
bookRouter.delete("/:id", deletebook);

module.exports = bookRouter;
