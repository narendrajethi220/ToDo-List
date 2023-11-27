const Express = require("express");
const bodyParser = require("body-parser");

var app = Express();

app.set("view engine", "ejs");

app.use(Express.static("public"));
app.use(Express.urlencoded({ extended: true }));

var items = [];
var example = "Working";
app.get("/", function (req, res) {
  res.render("list", { ejes: items });
});

app.post("/", function (req, res) {
  var item = req.body.ele1;
  items.push(item);
  res.redirect("/");
});

app.listen(8000, () => {
  console.log("Server Started");
});
