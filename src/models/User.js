
const { DataTypes } = require('sequelize');
const database = require('../config/database');

const User = database.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },

  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  tableName: 'users',
  timestamps: true,
  underscored: true
});

module.exports = User;
