module.exports = (app) => {
    const Region = require('../../../controllers/refs/RegionController')

    var router = require("express").Router();
    // return all documents
    router.get('/', Region.findAll);
    // return specific document by ID
    router.get('/:id', Region.findById);

    app.use('/api/v1/Refs/Region',router);
}