
const { DataTypes } = require('sequelize');
const database = require('../config/database');

const ProductCategory = database.define('ProductCategory', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'products',
      key: 'id'
    }
  },

  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'categories',
      key: 'id'
    }
  }

}, {
  tableName: 'product_category',
  timestamps: false,
  underscored: true
});

module.exports = ProductCategory;
