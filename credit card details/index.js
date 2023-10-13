const express = require('express')
const mongoose = require('mongoose')
const app = express()

let save = undefined

mongoose.connect('mongodb://127.0.0.1:27017/CreditCardDetails');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connection Successful');
})

var response = new mongoose.Schema({
    CardNumber: String,
    CVVNumber: Number,
    CardHolderName: String,
    ExpiryDate: Date
});
var card = mongoose.model('Card', response);

const hostname = '127.0.0.1'
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/html/index.html')
})

app.post('/ccd', (req,res)=>{
    // res.send("Hello")
    save = req.body.SaveCard
    if(save)
    {
        let myData = new card(req.body)
        myData.save().then(()=>{
            res.sendFile(__dirname+"/html/success.html")
        }).catch(()=>{
            res.send("Oops! Something went wrong...")
            
        })
    }
    else{
        res.sendFile(__dirname+"/html/success.html")
        // res.send("ok")
    }

})

app.listen(port,hostname,()=>{
    console.log(`Server started successfully on http://${hostname}:${port}/`);
})

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });