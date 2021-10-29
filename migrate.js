'use strict';
const db = require('./models/index');
const fs = require('fs');
const folder = './migration'
// let rawdata = fs.readFileSync('./migration/refs/BANK.json');
// let student = JSON.parse(rawdata);
// console.log(student);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let sum = JSON.parse(fs.readFileSync(folder + '/summary.json'));

sum.forEach(model => {
    try {
        let currentModel = JSON.parse(fs.readFileSync(model.filename));
        // console.log(currentModel);
        db[model.collection].insertMany(currentModel, (err) => {
            if (err) {
                currentModel,
                console.log(err);
            }
        })
    } catch {
        console.log("An error occured while reading and parsing file in " + model.filename);
    }
});


// fs.readdirSync(folder).forEach(file => {
//     JSON.parse(fs.readFileSync(folder + '/' + file));
// });