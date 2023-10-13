const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/atrithaker');

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('Connection Successful');
})

var student = new mongoose.Schema({
    name: String
});

var stu = mongoose.model('stu',student);

var student1 = new stu({name: 'nachiket'});
console.log(student1.name);
student1.save();
stu.find({}).then(data=>console.log(data));
