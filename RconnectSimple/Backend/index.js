const express = require('express');
const server  = express();
const port  =  8080;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Connection between mongoose 
mongoose.set('strictQuery',true);



async function main(){
 await mongoose.connect('mongodb://localhost:27017/demo',{usenewUrlParser:true});
 console.log('Mongodb connected');
}

main().catch(err=>console.log(err.message));

//Create Schema 
const userSchema =new mongoose.Schema({
  username:{
    type:String
  },
  password:{
    type:String
  }
})

const User = mongoose.model('User',userSchema); 

//Adding a MiddleWare 

server.use(cors());
server.use(bodyParser.json());

server.post('/demo',function(req,res){
 let user = new User();
   user.username = req.body.username;
   user.password = req.body.password;

   user.save();
  console.log(req.body)
   res.json(req.body);
})


server.get('/demo',async(req,res)=>{
const docs  = await User.find({});
res.json(docs);
})



server.listen(port,()=>{
    console.log('Server listening on port '+port);
})