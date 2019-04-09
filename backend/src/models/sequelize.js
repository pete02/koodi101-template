var Sequelize = require('sequelize');

var sequelize = new Sequelize({
  logging: false,
  dialect: 'sqlite',
  storage: './db/chat.sqlite',
});
var insequelize = new Sequelize({
  logging: false,
  dialect: 'sqlite',
  storage: './db/sensor.sqlite',
});

module.exports = sequelize;
module.exports = insequelize;
