const db = require('../../models/index');
const mongoose = require('mongoose');
const Model = db.PerEmployment;

exports.findAllNodesById = (req, res) => {
    try {
        var id = req.params.id
        if (mongoose.Types.ObjectId.isValid(id))
            Model.find({
                PERSONAL_ID: id
            }, null, {
                sort: {
                    IN_OFFICE_DATE: -1
                }
            }).populate('post').populate('prich')
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