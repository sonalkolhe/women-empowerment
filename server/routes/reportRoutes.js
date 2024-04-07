const app = require('express');
const reportController = require('./../controllers/reportController');

const Router = app.Router();

Router.route('/')
    .post(reportController.createReport)
    .get(reportController.getMany);

Router.route('/:id')
    .get(reportController.getOne)
    .patch(reportController.update)
    .delete(reportController.delete);

module.exports = Router;
