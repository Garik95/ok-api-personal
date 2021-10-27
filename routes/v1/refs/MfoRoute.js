module.exports = (app) => {
    const Mfo = require('../../../controllers/refs/MfoController')

    var router = require("express").Router();
    // return all documents
    router.get('/', Mfo.findAll);
    router.get('/all', Mfo.findAllNodes);
    // return specific document by ID
    router.get('/:id', Mfo.findById);

    app.use('/api/v1/Refs/Mfo',router);
}