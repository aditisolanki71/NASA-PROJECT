const { getAllLaunches, addNewLaunch } = require('../../models/launches.model')
function httpGetAllLaunches(req,res) {
    // for(const value of launches.values()) {....};
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req,res) {
    const launch = req.body;
    console.log("****Add launch is",launch)
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: "Missing required launch property"
        })
    }
    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: "invalid date"
        })
    }
    addNewLaunch(launch)
    return res.status(201).json(launch)
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}