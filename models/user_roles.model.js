import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import { Users } from "./users.model.js";
import { Roles } from "./roles.model.js";

export const UserRoles = sequelize.define(
  "user_roles",
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Roles,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

// Many-to-Many aloqa
Users.belongsToMany(Roles, {
  through: UserRoles,
  foreignKey: "user_id",
});

Roles.belongsToMany(Users, {
  through: UserRoles,
  foreignKey: "role_id",
});
