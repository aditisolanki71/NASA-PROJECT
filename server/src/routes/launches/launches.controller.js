const { getAllLaunches, addNewLaunch } = require('../../models/launches.model')
function httpGetAllLaunches(req,res) {
    // for(const value of launches.values()) {....};
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req,res) {
    const launch = req.body;
    console.log("****Add launch is",launch)
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch)
    return res.status(201).json(launch)
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}