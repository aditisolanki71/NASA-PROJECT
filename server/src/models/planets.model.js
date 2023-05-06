//5
// const planets = [];
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

// module.exports = planets;
const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}


function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
      .pipe(parse({
        comment: '#',
        columns: true,
      }))
      .on('data', (data) => {
        // console.log("hello",data)
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
         // console.log("****habita",habitablePlanets)
        }
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve();
      });
  });
}
console.log("lennn",habitablePlanets.length)
console.log("111111111111 habitable",habitablePlanets)

function getAllPlanets() {
    return habitablePlanets;
}
module.exports = {
  loadPlanetsData,
  getAllPlanets,
};