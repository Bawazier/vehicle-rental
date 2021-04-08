"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            Vehicle.belongsTo(models.User);
            Vehicle.belongsTo(models.Category);
            Vehicle.hasMany(models.Order);
        }
    }
    Vehicle.init(
        {
            userId: DataTypes.INTEGER,
            categoryId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            location: DataTypes.STRING,
            price: DataTypes.INTEGER,
            status: DataTypes.ENUM("available", "unavailable"),
            prepayment: DataTypes.BOOLEAN,
            capacity: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Vehicle",
        }
    );
    return Vehicle;
};