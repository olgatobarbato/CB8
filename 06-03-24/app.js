require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT;

app.set("view engine", "hbs");
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const rootRouter = require("./routes/root");
const productsRouter = require("./routes/api/products");

app.use("/", rootRouter);

app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Server attivo sulla porta ${port}`);
});
