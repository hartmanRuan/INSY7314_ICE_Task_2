# INSY7314_ICE_Task_2


## Item Resource Structure
The API manages a **Books** resource with 5 attributes:
- `id` (String)
- `title` (String)
- `author` (String)
- `genre` (String)
- `price` (Number)

---

## Tested API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `http://localhost:4000/` | Root route |
| `GET` | `http://localhost:4000/health` | Server health status check |
| `GET` | `http://localhost:4000/api/books` | Fetch all books |
| `GET` | `http://localhost:4000/api/books/:id` | Fetch single book by ID |
| `POST` | `http://localhost:4000/api/books` | Add a new book (with input validation) |

---

## Sample POST Request Bodies (Added Items)

### Item 1
```json
{
  "title": "Refactoring",
  "author": "Martin Fowler",
  "genre": "Software Engineering",
  "price": 48.00
}
```
### Item 2
```json
{
  "title": "Domain-Driven Design",
  "author": "Eric Evans",
  "genre": "Architecture",
  "price": 60.00
}
```
### Item 3
```json
{
  "title": "You Don't Know JS",
  "author": "Kyle Simpson",
  "genre": "JavaScript",
  "price": 30.00
}

```
### Item 4
```json
{
  "title": "Code Complete",
  "author": "Steve McConnell",
  "genre": "Software Engineering",
  "price": 42.00
}

```
### Item 5
```json
{
  "title": "Introduction to Algorithms",
  "author": "Thomas H. Cormen",
  "genre": "Computer Science",
  "price": 80.00
}

```
### Missing Required Fields Validation Check
```json
{
  "author": "Unknown Author",
  "genre": "Mystery"
}
```
All required fields need to be entered. 400 Bad Request

### Invalid Data Type Validation Check
```json
{
  "title": "Invalid Price Book",
  "author": "Jane Doe",
  "genre": "Fiction",
  "price": "free"
}
```
Price Needs to be a positive number
