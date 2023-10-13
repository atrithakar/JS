const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/atrithaker');
// ,{useNewUrlParser:true,useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('Connection Successful');
})

// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/atrithaker');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
// console.log('hi');
