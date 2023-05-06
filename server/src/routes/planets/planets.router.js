const express = require('express');
//3
const { httpGetAllPlanets } = require('./planets.controller');
const planetsRouter = express.Router();

planetsRouter.get('/planets',httpGetAllPlanets);

module.exports = planetsRouter;