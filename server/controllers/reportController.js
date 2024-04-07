const handlerFactory = require('./handlerFactory.js');
const Report = require('../models/reportModel.js');

exports.createReport = handlerFactory.createOne(Report);
exports.getOne = handlerFactory.getOne(Report);
exports.getMany = handlerFactory.getAll(Report);
exports.update = handlerFactory.updateOne(Report);
exports.delete = handlerFactory.deleteOne(Report);
