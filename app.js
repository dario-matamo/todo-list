const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');

app.get("/",function (req,res) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let today = new Date();
    let day = weekday[today.getDay()];
    
    res.render("list",{day: day});
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});