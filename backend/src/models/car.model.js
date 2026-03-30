import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const carModel = sequelize.define("Car", {
  marca: {
    type: DataTypes.STRING(),
  },
  modelo: {
    type: DataTypes.STRING(),
  },
  anio: {
    type: DataTypes.INTEGER(),
  },
  precio: {
    type: DataTypes.FLOAT(),
  },
  kilometraje: {
    type: DataTypes.INTEGER(),
  },
  estado: {
    type: DataTypes.ENUM(["Nuevo", "Usado"]),
  },
  description: {
    type: DataTypes.TEXT(),
  },
  imgURL: {
    type: DataTypes.STRING(),
  },
});
