const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Arsala:<Mohibml1>@cluster0-vu6xr.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true
}).then( () => {
    console.log("connected to DB");
}).catch(err => {
    console.log("ERR:", err.message);
});


app.get("/", (req, res) => {
    res.send("Server is Running!");
});
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/sass"));
app.use(express.static(__dirname + "/img"));

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is Running on Port 8080");
});