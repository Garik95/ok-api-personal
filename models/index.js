const mongoose = require("mongoose");
const dbconf = require('../dbconfig');

const db = mongoose
    .connect(dbconf.url)
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    });
// schema
regionSchema = require('./refs/Region')(mongoose)

// models
db.Region = mongoose.model('Region', regionSchema);

db.Bank = require('./refs/Bank')(mongoose)
db.Distr = require('./refs/Distr')(mongoose,regionSchema)
db.Family = require('./refs/Family')(mongoose)
db.Langs = require('./refs/Langs')(mongoose)
db.MFO = require('./refs/MFO')(mongoose,regionSchema)
db.Nation = require('./refs/Nation')(mongoose)
db.Obraz = require('./refs/Obraz')(mongoose)
db.Party = require('./refs/Party')(mongoose)
db.Prich = require('./refs/Prich')(mongoose)
db.Str = require('./refs/Str')(mongoose)
db.UchStep = require('./refs/UchStep')(mongoose)
db.UchZav = require('./refs/UchZav')(mongoose)
db.UchZvn = require('./refs/UchZvn')(mongoose)
db.Post = require('./refs/Post')(mongoose)
console.log(db);

module.exports = db;