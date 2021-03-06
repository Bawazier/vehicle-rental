"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            User.belongsTo(models.Role);
            User.hasMany(models.Vehicle);
            User.hasMany(models.Order);
        }
    }
    User.init({
        roleId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        gender: DataTypes.STRING,
        dateOfBirth: DataTypes.DATEONLY,
        picture: DataTypes.STRING,
        address: DataTypes.TEXT
    }, {
        sequelize,
        modelName: "User",
    });
    return User;
};