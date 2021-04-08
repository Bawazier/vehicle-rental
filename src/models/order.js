"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            Order.belongsTo(models.User);
            Order.belongsTo(models.Vehicle);
        }
    }
    Order.init({
        userId: DataTypes.INTEGER,
        vehicleId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        orderStatus: DataTypes.ENUM,
        paymentStatus: DataTypes.ENUM,
        bookingCode: DataTypes.STRING,
        paymentCode: DataTypes.BIGINT
    }, {
        sequelize,
        modelName: "Order",
    });
    return Order;
};