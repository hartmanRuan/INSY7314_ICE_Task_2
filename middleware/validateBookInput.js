
const validateBookInput = (req, res, next) => {
  const { title, author, genre, price } = req.body;

  if (!title || !author || !genre || price === undefined) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: title, author, genre, and price are required.'
    });
  }

  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: price must be a positive number.'
    });
  }

  next();
};

module.exports = validateBookInput;