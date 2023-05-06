const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

//2
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

//it should go before security related feature..here we have cors
app.use(morgan('combined'))
// >npm run watch
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(planetsRouter);
app.use(launchesRouter);
//server public file
// >npm run server
//localhost:8000/

//npm run deploy
//localhost:8000/history
app.get('/*',(req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})
module.exports = app;