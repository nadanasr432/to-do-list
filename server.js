const express = require("express");
const path = require('path')
const bodyParser = require('body-parser')
mongoose = require("mongoose");
const app = express(); 
app.set("view engine", "ejs");
app.use("/static",express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())
app.get('/',(req, res) => {
    res.render('todo.ejs');
    });
app.post('/',(req, res) => {
    console.log(req.body);
    });

app.listen(3000, () => console.log("Server Up and running"));
