
const { DataTypes } = require('sequelize');
const database = require('../config/database');

const ProductImage = database.define('ProductImage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

  path: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  tableName: 'product_images',
  timestamps: true,
  underscored: true
});

module.exports = ProductImage;
