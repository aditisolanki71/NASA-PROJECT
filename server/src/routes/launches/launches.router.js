const express = require('express');
const { httpGetAllLaunches, httpAddNewLaunch } = require('../../routes/launches/launches.controller')

const launchesRouter = express.Router();

launchesRouter.get('/launches',httpGetAllLaunches);
launchesRouter.post('/launches',httpAddNewLaunch);

module.exports = launchesRouter;