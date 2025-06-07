// models/bus_driver.model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import { Bus } from "./bus.model.js";
import { Driver } from "./driver.model.js";

export const BusDriver = sequelize.define(
  "bus_drivers",
  {
    bus_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Bus,
        key: "id",
      },
    },
    driver_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Driver,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

// Many-to-Many
Bus.belongsToMany(Driver, {
  through: BusDriver,
  foreignKey: "bus_id",
});

Driver.belongsToMany(Bus, {
  through: BusDriver,
  foreignKey: "driver_id",
});
