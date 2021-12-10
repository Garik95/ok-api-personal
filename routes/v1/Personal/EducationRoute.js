module.exports = (app) => {
    const Model = require('../../../controllers/Personal/EducationController')

    var router = require("express").Router();

    router.get('/all/:id', Model.findAllNodesById);

    app.use('/api/v1/Personal/Education',router);
}