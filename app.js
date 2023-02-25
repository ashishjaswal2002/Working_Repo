//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const { strict } = require("assert");
//Added modules in our application
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

// const encrypt = require('mongoose-encryption');
// const md5 = require('md5');
//Using Bycrypt
const bcrypt = require("bcrypt");

const saltRounds = 10;

console.log(process.env.SECRET);

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
//To prevent attackers from tampering with the session ID or creating fake session IDs, the server uses a cryptographic signature to sign the session ID cookie. The secret option is used as the key to generate this signature. The secret should be a unique, hard-to-guess string that is not shared with anyone, as anyone with knowledge of the secret can potentially create valid session IDs and impersonate other users.
app.use(
  session({
    secret: "Our Little Secret",
    resave: false,
    saveUninitialized: false,
  })
);
//Passport session how to use
app.use(passport.initialize());
app.use(passport.session());



mongoose.set("strictQuery", true);
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true});

//Create a Schema

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

 userSchema.plugin(passportLocalMongoose);
 


// userSchema.plugin(encrypt,{secret:process.env.SECRET,encryptedFields:['password']});

const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen(3000, function () {
  console.log("Server started on port 3000");
});

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

// app.post("/register", function (req, res) {
//   bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
//     const newUser = new User({
//       email: req.body.username,
//       password: hash,
//     });

//     newUser.save(function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.render("secrets");
//       }
//     });
//   });
// });
//Commenting to use Authentication...


app.post('/register',function(req,res){
     User.register({username:req.body.username},req.body.password,function(err,user){
       if(err){
        console.log(err);
        res.redirect('/login');
       }
       else{
        passport.authenticate("local")(req,res,function(){
          res.redirect('/secrets');
        });
       }
     })
})
app.get('/secrets',function(req,res){
  if(req.isAuthenticated()){
    res.render('secrets');

   }
  else{
    res.redirect('/login');
    console.log("req.isAuthenticated() is", req.isAuthenticated());

  }
})
//Login route

//     User.findOne({ email: username}, function(error, user){
//         if(error){
//             console.log(error);
//             res.redirect("/login?error=internal");
//         }else{
//             if(user){

//                 if(user.password === password){
//                     res.render("secrets");
//                 } else {
//                     res.redirect("/login?error=auth");
//                 }
//             } else {
//                 res.redirect("/login?error=auth");
//             }
//         }
//     });
// });
app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ email: username }, function (error, user) {
    if (error) {
      console.log(error);
    } else {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            res.render("secrets");
          }
        });
      }
    }
  });
});
