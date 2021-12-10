const db = require('../../models/index');
const mongoose = require('mongoose');
const Model = db.PerEducation;

exports.findAllNodesById = (req, res) => {
    try {
        var id = req.params.id
        if (mongoose.Types.ObjectId.isValid(id))
            Model.find({
                PERSONAL_ID: id
            }, null, {
                sort: {
                    DIPLOM: -1
                }
            })
            .then(data => {
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