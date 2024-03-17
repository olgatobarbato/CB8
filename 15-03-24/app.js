const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let libri = [
  {
    id: 1,
    titolo: "Il signore degli anelli",
    autore: "J.R.R. Tolkien",
    anno: 1954,
  },
  {
    id: 2,
    titolo: "1984",
    autore: "George Orwell",
    anno: 1949,
  },
  {
    id: 3,
    titolo: "Cronache del ghiaccio e del fuoco",
    autore: "George R.R. Martin",
    anno: 1996,
  },
  {
    id: 4,
    titolo: "Harry Potter e la pietra filosofale",
    autore: "J.K. Rowling",
    anno: 1997,
  },
  {
    id: 5,
    titolo: "Il giovane Holden",
    autore: "J.D. Salinger",
    anno: 1951,
  },
];

app.get("/", (req, res, next) => {
  res.send("<h1>HOMEPAGE</h1>");
});

app.get("/api/libri", (req, res, next) => {
  let sortedBooks = [...libri];
  const { sort, order } = req.query;

  if (sort && order) {
    sortedBooks.sort((a, b) => {
      if (order === "asc") {
        return a[sort] > b[sort] ? 1 : -1;
      } else if (order === "desc") {
        return a[sort] < b[sort] ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  res.json(sortedBooks);
});

app.post("/api/libri", (req, res, next) => {
  const body = req.body;
  if (body.titolo && body.id && body.autore && body.anno) {
    libri.push(body);
    res.status(201).send("Libro aggiunto");
  } else {
    res
      .status(400)
      .send("Qualcosa è andato storto. Tutti i campi devono essere inseriti");
  }
});

app.delete("/api/libri/:id", (req, res, next) => {
  const id = Number(req.params.id);
  libri = libri.filter((libro) => libro.id !== id);
  res.send("Libro cancellato");
});

app.put("/api/libri/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = libri.findIndex((libro) => libro.id === id);

  if (index === -1) {
    res.status(400).send("ID non trovato");
  } else {
    libri[index] = body;
    res.send("Cambi effettuati");
  }
});

app.listen(PORT);
