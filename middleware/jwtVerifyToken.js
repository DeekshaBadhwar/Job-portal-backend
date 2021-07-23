const jwt = require('jsonwebtoken');



module.exports.verfiytoken =  (req,res,next)=>{
    if('authorization' in req.headers){
       var token= req.headers['authorization'].split(' ')[1];
        if(!token){
           return res.status(401).send({
               auth:false,
               message:"token is not authorized"
            })
        }
    
        else{
           jwt.verify(token,"SECRETKEY007",(err,user)=>{
                if(err){
                    res.status(401).send({auth:false,message:"token is not  good generated"})
                }
                else{
                    id = jwt.decode(token);
                   next();
                    
                }
            })
        }
    }
}