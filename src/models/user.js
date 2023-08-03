"use strict";
const { Model } = require("sequelize");
const checkPassword = require("../utils/checkPassword");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "first name is required" },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "first name is required" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { name: "email", msg: "email already taken" },
        validate: {
          isEmail: { msg: "invalid email format" },
          notNull: { msg: "first name is required" },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: "username",
          msg: "username already taken!",
        },
        validate: {
          isLowercase: {
            args: true,
            msg: "username must be lowercase!",
          },
          len: {
            args: [6, 20],
            msg: "username must be 6-20 character!",
          },
          notNull: {
            msg: "username is required",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          checkPassword,
          notNull: { args: true, msg: "password is required" },
        },
      },
      role: {
        type: DataTypes.ENUM,
        values: ["Admin", "Customer"],
        allowNull: false,
        defaultValue: "Customer",
        validate: {
          notNull: { msg: "role is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
      paranoid: true,
    }
  );
  User.beforeCreate(async (user, _) => {
    const password = await bcrypt.hash(user.password, 10);
    user.password = password;
  });
  User.prototype.comparePassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      console.log(error);
      throw new Error("error comparing password");
    }
  };
  return User;
};
