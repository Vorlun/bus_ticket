import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import { Province } from "./province.model.js";

export const City = sequelize.define("City", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  province_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Province,
      key: "id",
    },
  },
});

// One-to-Many: Province -> Cities
Province.hasMany(City, { foreignKey: "province_id", onDelete: "CASCADE" });
City.belongsTo(Province, { foreignKey: "province_id" });
