const database = require('../database');

const LIMIT = require('../config').DEFAULT_LIMIT;

const getChats = async (params = {}) => {
  const query = params.query || {};
  const limit = query.limit || query.max || LIMIT;
  const offset = query.offset || 0;

  const options = {};

  const result = await database.Chat.findAndCountAll(options);

  return {
    results: await Promise.all(result.rows.map(chat => chat.toJSON())),
    metadata: {
      resultset: { count: result.count, offset, limit },
    },
  };
};

const createChat = async (params) => {
  const chat = await database.Chat.create({ room: params.room, nick: params.nick, summary: params.summary });

  return { chat };
};

exports.getChats = getChats;

exports.createChat = createChat;

exports.list = async (ctx) => {
  const result = await getChats(ctx.request);

  ctx.body = result;
};

exports.create = async (ctx) => {
  const { chat } = await createChat(ctx.request.body);

  ctx.body = await chat.toJSON();
  ctx.status = 201;
};
