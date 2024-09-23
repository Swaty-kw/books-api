const errorHandler = (err, req, res, next) => {
  try {
    return res
      .status(err.status || 500)
      .json({ error: err || "interval error" });
  } catch (error) {
    console.log(error);
    next();
  }
};
module.exports = errorHandler;
