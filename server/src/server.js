// const express = require('express');
// const app = express();
// app.listen();

const app = require('./app')

const http = require('http');

const PORT = process.env.PORT || 8000;
console.log(PORT)

const server = http.createServer(app);
server.listen(PORT, () =>{
    console.log("App is listening on", PORT)
});
