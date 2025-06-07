import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Province = sequelize.define("Province", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
