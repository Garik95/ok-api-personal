module.exports = (app) => {
    const Model = require('../../../controllers/refs/UchZvnController')

    var router = require("express").Router();
    // return all documents
    router.get('/', Model.findAll);
    // return specific document by ID
    router.get('/:id', Model.findById);

    app.use('/api/v1/Refs/UchZvn',router);
}