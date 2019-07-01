const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Server is Running!");
});
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/sass"));
app.use(express.static(__dirname + "/img"));


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running on Port 3000");
});