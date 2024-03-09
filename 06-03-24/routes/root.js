const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

router.get("/contacts", (req, res) => {
  res.render("contacts", { title: "Contacts" });
});

module.exports = router;
