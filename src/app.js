const express = require("express");

const {adminAuth, userAuth} = require("./middlewares/auth");

const app = express();

app.use("/admin",adminAuth);

app.post("/user/login", (req,res)=>{
    res.send("User logged in successfully");
});

app.get("/user", userAuth, (req,res) =>{
    res.send("User data sent succesfully");
});

app.get("/admin/getAllData", (req,res) =>{
    res.send("All data sent");
});

app.delete("/admin/deleteData", (req,res) =>{
    res.send("Data deleted successfully");
});

app.use("/", (err,res,req,next)=>{
    if(err){
        res.status(500).send("Something went wrong");
    }
})

app.listen(3000, () =>{
    console.log("server is successfully listening on port 3000");
});