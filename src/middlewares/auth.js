const adminAuth = (res,req,next)=>{
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized request");
    }
    else{
        next();
    }
};

const userAuth = (req,res,next) =>{
    const token  = "abc";
    const isUserAuthorized = token === "s";
    if(!isUserAuthorized){
        res.status(401).send("Unathorized request");
    }
    else{
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth,
}