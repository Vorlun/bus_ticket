import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Roles = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        isIn: [["admin", "manager", "operator", "user"]],
      },
    },
  },
  {
    timestamps: false,
  }
);
