module.exports = (app) => {
    const Model = require('../../../controllers/Personal/PersonalController')

    var router = require("express").Router();
    router.get('/all/:id', Model.findByIdAll);
    router.get('/skud/:id', Model.getSKUDActivity);

    app.use('/api/v1/Personal/Personal',router);
}