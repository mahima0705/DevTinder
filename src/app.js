const express = require("express");

const app = express();

app.use("/test", (req,res) =>{
    res.send("this is a test page");
});

app.use("/",(req,res) =>{
    res.send("welcome to the dashboard");
});

app.listen(7777,() =>{
    console.log("the port is listening successfully on port 7777")
});