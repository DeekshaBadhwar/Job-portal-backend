const jwt=require('jsonwebtoken')


module.exports.verifytoken=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(authHeader){
        var token=authHeader.split(' ')[1];
        jwt.verify(token,"SECRETKEY1998",(err,user)=>{
            if(err){
                res.send("err in generationg token")
            }
            id = jwt.decode(token);
            next()
        })
    }
        else
        {
            res.send("token is not provided/authorized")
        }
    
}