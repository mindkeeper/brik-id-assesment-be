"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      // define association here
      this.belongsTo(Category, { foreignKey: "category_id", as: "category" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "product name is required" },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: "product description is required",
        },
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "sku is required" },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "product weight value must be an integer" },
        },
      },
      width: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "product width value must be an integer" },
        },
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "product length value must be an integer" },
        },
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "product height value must be an integer" },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "product price value must be an integer" },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: { msg: "invalid image url format" },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      underscored: true,
      paranoid: true,
    }
  );
  return Product;
};
