const db = require('../../models/index');
const mongoose = require('mongoose');
const Model = db.Personal;

exports.findByIdAll = (req, res) => {
    try {
        var id = req.params.id
        if (mongoose.Types.ObjectId.isValid(id))
            Model.findById(id).populate('entity').populate('post').populate('branch').populate('nation').populate('citizen').populate('birth').populate('addrFactRegion').populate('addrFactDistr').populate('addrRegion').populate('addrDistr').populate('obraz').populate('familyStatus')
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred"
                });
            });
        else {
            res.send('invalid ID')
        }
    } catch (err) {
        res.send(err)
    }
}