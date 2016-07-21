'use strict';

module.exports = function ( sequelize, DataTypes ) {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    organization: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,

    instanceMethods: {},
    comment: 'user table'
  });
};
