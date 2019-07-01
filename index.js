const express = require("express");
const app = express();


app.get("home", (req, res) => {
    res.render("home");
});
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/img"));
app.use(express.static(__dirname + "/sass"));
app.use(express.static(__dirname + "/views"));


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running on Port 3000");
});