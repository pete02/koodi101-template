var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var Chat = sequelize.define('chats', {
  room: Sequelize.STRING,
  nick: Sequelize.STRING,
  summary: Sequelize.TEXT,
}, {
  timestamps: true,
});

Chat.prototype.toJSON = function toJSON () {
  return {
    id: this.id,
    room: this.room,
    nick: this.nick,
    summary: this.summary,
    createdAt: this.createdAt,
  };
};

module.exports = Chat;
