const notFoundHandler = (req, res, next) => {
  try {
    return res
      .status(404)
      .json({ error: `${request.originalUrl}does not exist` });
  } catch (error) {
    next();
  }
};
module.exports = notFoundHandler;
