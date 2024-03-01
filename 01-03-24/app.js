const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const data = require("./quotes");

const app = express();
const PORT = 4000;

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/endpoints", (req, res) => {
  res.render("endpoints");
});

app.get("/quotes", (req, res) => {
  res.render("quotes", data);
});

app.get("/quotes/:id", (req, res) => {
  const quoteId = req.params.id;
  const quote = data.quotes.find((q) => q.id === quoteId);
  if (!quote) {
    res.status(404).send("Quote not found");
  } else {
    res.render("quote", { quote });
  }
});

app.get("/quotes/authors/:author", (req, res) => {
  const quoteAuthor = req.params.author;
  const quote = data.quotes.find(
    (q) => q.author.toLowerCase() === quoteAuthor.toLowerCase()
  );
  if (!quote) {
    res.status(404).send("Quote not found");
  } else {
    res.render("quote", { quote });
  }
});

app.get("/addNewQuote", (req, res) => {
  res.render("addNewQuote");
});

app.post("/quotes", (req, res) => {
  const newQuote = {
    id: data.quotes.length + 1,
    quote: req.body.quote,
    author: req.body.author,
  };
  data.quotes.push(newQuote);
  res.status(201).send("Quote aggiunta con successo!");
});

app.put("/quotes/:id", (req, res) => {
  const quoteId = req.params.id;
  const quoteIndex = data.quotes.findIndex((q) => q.id === quoteId);

  if (!quoteIndex) {
    res.status(404).send("Quote not found");
  } else {
    res.status(201).send("Quote modificata con successo!");
  }
});

app.delete("/quotes/:id", (req, res) => {
  const quoteId = req.params.id;
  const quoteIndex = data.quotes.findIndex((q) => q.id === quoteId);

  if (!quoteIndex) {
    res.status(404).send("Quote not found");
  } else {
    res.status(200).send("Quote eliminata con successo!");
  }
});

app.listen(PORT, () => {
  console.log("server attivo");
});
