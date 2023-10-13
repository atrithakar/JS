const fs = require("fs");
const text = fs.readFileSync("file1.txt","utf-8");
console.log(text);
// fs.writeFileSync("generated.txt",text);
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(text);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});