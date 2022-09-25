'use strict';

require('dotenv').config();
const{ Sequelize, DataTypes } = require('sequelize');

const jediSchema = require('./jedi.schema');
const sithSchema = require('./sith.schema');

const ModelInterface = require('./modelInterface');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const JediModel = jediSchema(sequelizeDatabase, DataTypes);
const SithModel = sithSchema(sequelizeDatabase, DataTypes);

JediModel.hasMany(SithModel);
SithModel.belongsTo(JediModel);

module.exports = {
  sequelizeDatabase,
  jediInterface: new ModelInterface(JediModel),
  sithInterface: new ModelInterface(SithModel),
};
