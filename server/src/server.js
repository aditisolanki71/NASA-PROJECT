// const express = require('express');
// const app = express();
// app.listen();

//1
const app = require('./app');

// const planetsModel = require('./models/planets.model');
// const { loadPlanetsData } = planetsModel
const { loadPlanetsData } = require('./models/planets.model');
const http = require('http');

const PORT = process.env.PORT || 8000;
console.log(PORT)

 const server = http.createServer(app);
async function startServer() {
     await loadPlanetsData();
    server.listen(PORT, () =>{
        console.log("App is listening on", PORT)
    });
}
startServer();

// server.listen(PORT, () =>{
//     console.log("Apppp is listening on", PORT)
// });
