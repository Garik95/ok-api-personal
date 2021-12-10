const db = require('../../models/index');
const mongoose = require('mongoose');
const sql = require("mssql");
const dbconfig = require('../../dbconfig');
const Model = db.Personal;

exports.findByIdAll = (req, res) => {
    try {
        var id = req.params.id
        if (mongoose.Types.ObjectId.isValid(id)) {
            Model.findOne({
                    _id: id
                })
                .populate('entity').populate('post').populate('branch').populate('nation').populate('citizen').populate('birth').populate('addrFactRegion').populate('addrFactDistr').populate('addrRegion').populate('addrDistr').populate('obraz').populate('familyStatus')
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred"
                    });
                });
        } else {
            res.send('invalid ID')
        }
    } catch (err) {
        res.send(err)
    }
}

exports.getSKUDActivity = (req, res) => {
    sql.connect(dbconfig.mssql, (err) => {
        if (err) throw err;
        else {
            var request = new sql.Request();
            request.query("select top 10 Mode,concat(DATEDIFF(SECOND,{d '1970-01-01'}, TimeVal),'000') TimeVal from Log where HozOrgan = " + Number(req.params.id) + " and DoorIndex = 1 and Event = 28 order by TimeVal desc", (err, result) => {
                if (err) throw err;
                else {
                    res.send(result.recordset)
                }
            })
        }
    })
}