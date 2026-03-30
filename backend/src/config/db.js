import { sequelize } from "./database.js";

export const initDB = async () => {
  try {
    //* Testeo de conexion con la base de datos
    await sequelize.authenticate();
    console.log("Base de datos autenticada");

    //* Sincronizacion o generacion de los modelos en la base de datos
    await sequelize.sync({ force: false });
    console.log("Base de datos sincronizada");
  } catch (err) {
    console.error("Error inicializando la Base de Datos", err);
  }
};
