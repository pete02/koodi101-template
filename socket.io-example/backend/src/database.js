const sequelize = require('./models/sequelize');

exports.Chat = require('./models/chat');

exports.sync = options => sequelize.sync(options);
exports.transaction = options => sequelize.transaction(options);
exports.close = options => sequelize.close(options);
