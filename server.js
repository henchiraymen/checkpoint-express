// require express
const express = require("express");

// instance express

const app = express();

//port

const port = 4000;

//Middleware
const Middleware = (req, res, next) => {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  if ((day() >= 1 && day <= 5 && hour >= 9 && hour <= 17) === true) {
    res.send("<h1> Application is not available now !!! </h1>");
  }
  next();
};

// routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Public/");
});
app.get("/service", (req, res) => {
  res.sendFile(__dirname + "/Public/service.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/Public/contact.html");
});
// listen
app.listen(port, (err) => {
  if (err) {
    console.log("there is a problem !!! server not running !!! ");
  } else {
    console.log(`server is running on port ${port} !!!`);
  }
});
app.use(Middleware);
app.use(express.static(__dirname + "/app"));
