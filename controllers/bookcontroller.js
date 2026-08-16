
let books = [
  { id: 'b1', title: 'Clean Code', author: 'Robert C. Martin', genre: 'Software', price: 45.00 },
  { id: 'b2', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', genre: 'Software', price: 50.00 },
  { id: 'b3', title: 'Design Patterns', author: 'Erich Gamma', genre: 'Software', price: 55.00 }
];

const getAllBooks = (req, res) => {
  res.status(200).json({ success: true, count: books.length, data: books });
};


const getBookById = (req, res) => {
  const { id } = req.params;
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ success: false, message: `Book with ID ${id} not found.` });
  }

  res.status(200).json({ success: true, data: book });
};


const createBook = (req, res) => {
  const { title, author, genre, price } = req.body;

  const newBook = {
    id: `b${books.length + 1}`,
    title,
    author,
    genre,
    price
  };

  books.push(newBook);
  res.status(201).json({ success: true, message: 'Book created successfully', data: newBook });
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook
};