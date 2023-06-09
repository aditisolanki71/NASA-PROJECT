const { getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchWithId } = require('../../models/launches.model')
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
            error: "Invalid launch date"
        })
    }
    addNewLaunch(launch)
    return res.status(201).json(launch)
}

function httpAbortLaunch(req,res) {
    const launchId = Number(req.params.id);

    if(!existsLaunchWithId(launchId)) {
        //if launch doesn't exist bt 
        return res.status(404).json({
            error: "Launch not found"
        })
    }
    
    if(abortLaunchWithId(launchId)) {
        //if launch exist
        return res.status(200).json("aborted")
    }
    
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}