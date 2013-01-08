/*
 * GET home page.
 */
config = require('../config');

exports.index = function(req, res){
  res.render('index', { title: 'NodeMinder.js', cameras: config.getCamerasCfg() });
};

exports.grid = function(req, res){
  res.render('grid', { title: 'NodeMinder.js Grid' });
};

