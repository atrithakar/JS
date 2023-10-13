const express = require('express');
const fs = require('fs');
const homepage = fs.readFileSync('index.html', 'utf-8');
// const style = fs.readFileSync('styles.css', 'utf-8');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

// app.get('/', (req, res) => {
//     res.send(homepage);
//     // res.setHeader('Content-Type', 'text/css');
//     // res.send(style);
// })

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
  });
app.get('/styles.css', function(req, res) {
    res.sendFile(__dirname + "/" + "styles.css");
  });


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});