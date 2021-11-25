const db = require('../../models/index');
const mongoose = require('mongoose');
const Model = db.PerFamily;

exports.findAll = (req, res) => {
    Model.find().populate('fam').then(data => {
        console.log(data);
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
}

exports.findAllNodes = async (req, res) => {
    Model.find().populate('region').populate('fam').populate('str').populate('distr').then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
}

exports.findById = (req, res) => {
    try {
        var id = req.params.id
        if (mongoose.Types.ObjectId.isValid(id))
            Model.find({ PERSONAL_ID: id }).populate('fam').populate('str').populate('distr')
                .then(data => {
                    console.log(data);
                    res.send(data);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).send({
                        message: err.message || "Some error occurred"
                    });
                });
    } catch (err) {
        res.send(err)
    }
}