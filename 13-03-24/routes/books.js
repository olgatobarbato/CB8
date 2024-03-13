const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const books = require("../books.json");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/add-book", (req, res) => {
  res.send(`
          <form action="/books" method="POST">
             <input type="text" placeholder="Titolo" name="title" />
            <input type="text" placeholder="Autore" name="author" />
         <input type="submit" />
      </form>
     `);
});

router.get("/books", (req, res) => {
  res.send(books);
});

router.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);

  res.redirect("/books");
});

module.exports = router;
