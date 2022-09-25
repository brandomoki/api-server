'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('sith', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lightsaber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
