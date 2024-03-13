const express = require("express");
const booksRoutes = require("./routes/books");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
});

app.use(booksRoutes);

app.listen(port);
