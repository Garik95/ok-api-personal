const db = require('../../models/index');
const mongoose = require('mongoose');
const Model = db.PerFamily;

exports.findAllNodesByID = async (req, res) => {
    try {
        var id = req.params.id
        if (mongoose.Types.ObjectId.isValid(id))
            Model.find({
                PERSONAL_ID: id
            }).populate('region').populate('fam').populate('str').populate('distr').then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred"
                });
            });
    } catch (err) {
        res.send(err)
    }
}