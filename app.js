const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
let items = ["First Task",];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/",function (req,res) {
    
    let day = date.getDate();
    res.render("list",{kindOfDay: day, newListItems: items});
});

app.post("/",function (req,res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});