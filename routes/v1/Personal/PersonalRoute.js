module.exports = (app) => {
    const Model = require('../../../controllers/Personal/PersonalController')

    var router = require("express").Router();
    router.get('/all/:id', Model.findByIdAll);

    app.use('/api/v1/Personal/Personal',router);
}