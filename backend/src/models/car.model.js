import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const CarModel = sequelize.define("Car", {
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  kilometraje: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  estado: {
    type: DataTypes.ENUM(["Nuevo", "Usado"]),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imgURL: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
