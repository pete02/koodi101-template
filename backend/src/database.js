const sequelize = require('./models/sequelize');

exports.Sensor = require('./models/sensor');

exports.sync = (options) => {
  return sequelize.sync(options);
};

exports.transaction = (options) => {
  return sequelize.transaction(options);
};


exports.InSensor = require('./models/insensor');


