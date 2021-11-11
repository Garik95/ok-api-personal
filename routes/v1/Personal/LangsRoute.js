module.exports = (app) => {
    const Model = require('../../../controllers/Personal/LangsController')

    var router = require("express").Router();
    // return all documents
    router.get('/', Model.findAll);
    router.get('/all', Model.findAllNodes);
    // return specific document by ID
    router.get('/:id', Model.findById);

    app.use('/api/v1/Personal/Langs',router);
}