// imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./database");
const errorHandler = require("./Middleware/errorhandler");
const notFoundHandler = require("./Middleware/notFoundHandler");
const bookRouter = require("./api/books.route");


dotenv.config();
//init
const PORT = process.env.PORT || 8000;
const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// mongoDB connection
connectDB();

// routes
app.use("/api/book", bookRouter); //localhost:8000/api/book/:id -> get/
// notfound handler middleware
app.use(notFoundHandler);
// error handler middleware
app.use(errorHandler);
// listen to start server
app.listen(PORT, () => {
  console.log(`Server running on port ${8000}`);
});
