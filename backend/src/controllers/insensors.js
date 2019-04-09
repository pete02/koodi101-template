const database = require('../database');

exports.list = async (ctx) => {
  let options = {};

  let result = await database.InSensor.findAll(options);
  let insensors = await Promise.all(result.map(insensor => insensor.toJSON()));

  let response = {
    results: insensors,
  };

  ctx.body = response;
};

exports.create = async (ctx) => {
  const params = ctx.request.body;

  const insensor = await database.InSensor.create({
    temperature: params.temperature,
    humidity: params.humidity
  });

  ctx.body = await insensor.toJSON();
  ctx.status = 201;
};
