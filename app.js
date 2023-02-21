//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
const { strict } = require('assert');


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set('strictQuery',true);
mongoose.connect('mongodb://localhost:27017/userDB',{useNewUrlParser:true});
//Create a Schema

const userSchema = {
    email:String,
    password:String,

}

const User = new mongoose.model('User',userSchema);




app.listen(3000,function(){
    console.log('Server started on port 3000');
})


app.get('/',function(req,res){
    res.render('home');
});

app.get('/login',function(req,res){
    res.render('login');
}
)

app.get('/register',function(req,res){
    res.render('register');
})

app.post('/register',function(req,res){
   const newUser = new User({
    email:req.body.username,
    password:req.body.password
   });

   newUser.save(function(err){
    if(err){
        console.log(err)
    }else{
      res.render("secrets");
    }
   })
})
//Login route

app.post('/login',function(req,res){
    const username  = req.body.username;
    const password = req.body.password;

 

    User.findOne({email:username},function(err,founduser){
        if(err){
            console.log(err)
        }else{
            if(founduser){
                if(founduser.password===password){
                    res.render('secrets');
                }
            }
        }
    })
})