import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Buses = sequelize.define("Buses", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  total_seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
