module.exports = (app) => {
    const Distr = require('../../../controllers/refs/DistrController')

    var router = require("express").Router();
    // return all documents
    router.get('/', Distr.findAll);
    router.get('/all', Distr.findAllNodes);
    // return specific document by ID
    router.get('/:id', Distr.findById);

    app.use('/api/v1/Refs/Distr',router);
}