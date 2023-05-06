const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: latestFlightNumber,
    mission: 'Kepler Explonation X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}


function addNewLaunch(launch) {
    latestFlightNumber = latestFlightNumber + 1;
    launches.set(latestFlightNumber,
        Object.assign(launch, {
            success: true,
            upcoming:true,
            customers: ['aditi','NASA'],
            flightNumber: latestFlightNumber
        })
    );
}

function existsLaunchWithId(launchId) {
    return launches.has(launchId)
}

function abortLaunchWithId(launchId) {
    // launch.delete(launchId);
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}
 
module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchWithId
}