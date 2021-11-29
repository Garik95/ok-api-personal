module.exports = (app) => {
    const Model = require('../../../controllers/Personal/FamilyController')

    var router = require("express").Router();
    router.get('/all/:id', Model.findAllNodesByID);

    app.use('/api/v1/Personal/Family', router);
}