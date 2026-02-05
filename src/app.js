const express = require("express");

const app = express();

app.get("/user", (req,res) =>{
    res.send({firstname : "Mahima", lastname: "Marathe"});
});

app.post("/user", (req,res) =>{
    console.log(req.body);
    res.send("Data successfully saved to the database");
});

app.delete("/user", (req,res)=>{
    res.send("Deleted Successfully");
});

app.use("/user", (req,res) =>{
    res.send("hello hello");
});

app.listen(3000, () =>{
    console.log("server is successfully listening on port 7777");
});