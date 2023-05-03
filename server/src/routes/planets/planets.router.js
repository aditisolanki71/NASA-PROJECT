const express = require('express');

const planetController = require('./planets.controller')
const { getAllPlanets } = planetController;
const planetsRouter = express.Router();

planetsRouter.get('/planets',getAllPlanets);

module.exports = planetsRouter;