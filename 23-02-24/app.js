const express = require("express");
const bodyParser = require("body-parser");
const authorization = require("./authorization");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("./form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.post("/mostra-dati", (req, res) => {
  const { user } = req.body;

  if (user) {
    return res.status(200).send(`Dati inseriti: ${user}`);
  }
  res.status(404).send("Errore nell'elaborazione dei dati");
});

app.get("/dashboard", authorization, (req, res) => {
  res.send("Dashboard");
});

app.listen(8000, () => {
  console.log("server attivo");
});
