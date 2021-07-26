const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport  = require('passport');
const db  =require('../models/index');
const registered_recruiter = db.registered_recruiters;

passport.use('local-recruiter',
    new LocalStrategy({usernameField:'email'},
    async (email,password,done)=>{
        const user = await registered_recruiter.findOne({where:{email:email}},
            function(err){
            if(err) return done(err)
            })
            if(!user){
                return done(null,false,{message:"Incorrect is email"})
            }
            const result = user;
            const value =  bcrypt.compareSync(password,result.password); 
            if(value === true)
            {
                return done(null,user)
            }
            else
            {
                return done(null,false,{message:"password is wrong"})
            }
    })
)