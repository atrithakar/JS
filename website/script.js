// const fs = require('fs');
const mongoose = require('mongoose');
const express = require('express');
const app=express();

mongoose.connect('mongodb://127.0.0.1:27017/atrithaker');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('Connection Successful');
})
var response = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  feedback: String
});
var resp = mongoose.model('resp',response);

// const home = fs.readFileSync('index.html','utf-8');
// const about = fs.readFileSync('./about.html','utf-8');
// const contact = fs.readFileSync('./contact.html','utf-8');
// const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.urlencoded({extended: true}))
 
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
app.get('/about', function(req, res) {
  res.sendFile(__dirname + "/" + "about.html");
});
app.get('/contact', function(req, res) {
  res.sendFile(__dirname + "/" + "contact.html");
});
app.post('/contact',(req,res)=>{
  var mydata = new resp(req.body);
  mydata.save().then(()=>{
    // res.send("This item is sent to our db");
    res.sendFile(__dirname + "/" + "thankyou.html");
  }).catch(()=>{
    res.sendFile(__dirname + "/" + "sorry.html");

  });
})
 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});