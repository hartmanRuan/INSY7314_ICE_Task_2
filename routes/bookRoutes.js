const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, createBook } = require('../controllers/bookController');
const validateBookInput = require('../middleware/validateBookInput');


router.route('/')
  .get(getAllBooks)
  .post(validateBookInput, createBook);


router.route('/:id')
  .get(getBookById);

module.exports = router;