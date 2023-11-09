require("dotenv").config(); //Hace que podamos usar una variable de entorno

const express = require("express");

const path = require("path");

const app = express();

const port = process.env.PORT || 4000;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

app.get("/", function (req, res){
    let htmlPath = path.resolve("./views/home.html");
    res.sendFile(htmlPath);
});

app.get("/register", function (req, res){
    let htmlPath = path.resolve("./views/register.html");
    res.sendFile(htmlPath);
});

app.get("/login", function (req, res){
    let htmlPath = path.resolve("./views/login.html");
    res.sendFile(htmlPath);
});

