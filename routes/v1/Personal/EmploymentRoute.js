module.exports = (app) => {
    const Model = require('../../../controllers/Personal/EmploymentController')

    var router = require("express").Router();
    
    router.get('/all/:id', Model.findAllNodesById);

    app.use('/api/v1/Personal/Employment',router);
}