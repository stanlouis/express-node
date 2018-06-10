const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "./public"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    WelcomeMessage: "Welcome to my website",
    currentYear: new Date().getFullYear()
  });
});

// /bad - send back json with errorMessage
app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
    currentYear: new Date().getFullYear()
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
