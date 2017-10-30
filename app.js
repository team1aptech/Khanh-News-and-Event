var express = require("express");
var app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("conten.ejs")
});

app.listen(2100, function () {
    console.log("server start !!! ");
});


