const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["uno","dos"];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/",function (req,res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US",options);
    
    res.render("list",{kindOfDay: day, newListItems: items});
});

app.post("/",function (req,res) {
    let item = req.body.newItem;
    items.push(item);
    for(var i =0;i<items.length;i++){
        console.log(items.at(i));
    }
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});