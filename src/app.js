const express = require("express");

const app = express();

app.get("/user", (req,res,next) =>{
    console.log("handling resuest 1");
    // res.send("Response 1");
    next();
},
[(req,res,next)=>{
    console.log("handling request 2");
    // res.send("Response 2");
    next();
}, 
(req,res,next) =>{
    console.log("handling request 3");
    // res.send("Response 3")
    next();
}],
(req,res) =>{
    console.log("handling request 4");
    res.send("Response 4");
}
);

app.listen(3000, () =>{
    console.log("server is successfully listening on port 7777");
});