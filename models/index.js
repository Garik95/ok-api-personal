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

// models
// emp
db.Personal = require('./Personal/Personal')(mongoose);

db.Branch = require('./Branch')(mongoose);
db.DepType = require('./DepType')(mongoose);
db.Entity = require('./Entity')(mongoose);
db.Post = require('./Post')(mongoose);
db.PostGroup = require('./PostGroup')(mongoose);
db.Region = require('./Region')(mongoose);
// Refs
pre = 'ref-'
db.Bank = require('./refs/Bank')(mongoose, pre)
db.Distr = require('./refs/Distr')(mongoose, pre)
db.Family = require('./refs/Family')(mongoose, pre)
db.Langs = require('./refs/Langs')(mongoose, pre)
db.Mfo = require('./refs/MFO')(mongoose, pre)
db.Nation = require('./refs/Nation')(mongoose, pre)
db.Obraz = require('./refs/Obraz')(mongoose, pre)
db.Party = require('./refs/Party')(mongoose, pre)
db.Prich = require('./refs/Prich')(mongoose, pre)
db.Str = require('./refs/Str')(mongoose, pre)
db.UchStep = require('./refs/UchStep')(mongoose, pre)
db.UchZav = require('./refs/UchZav')(mongoose, pre)
db.UchZvn = require('./refs/UchZvn')(mongoose, pre)
db.PostCB = require('./refs/Post')(mongoose, pre)
db.RegionRef = require('./refs/Region')(mongoose, pre)
// misc
db.Seq = require('./Seq')(mongoose);
console.log(db);

module.exports = db;