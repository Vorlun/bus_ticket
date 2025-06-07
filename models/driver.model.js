// models/driver.model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Drivers = sequelize.define("Drivers", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
