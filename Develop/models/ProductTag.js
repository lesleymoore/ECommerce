const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {type: DataTypes.INTEGER, allowNull:false, primaryKey:true},
    product_id: {type: DataTypes.INTEGER, allowNull:false, primaryKey:false},
    tag_id: {type: DataTypes.INTEGER, allowNull:false, primaryKey:false}
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'producttag',
  }
);

module.exports = ProductTag;
