//? ----------------------------------------------Importaciones
import { CarModel } from "../models/car.model.js";
import { matchedData } from "express-validator";

//? ---------------------------------------------- Controladores

//* Crear auto
export const createCar = async (req, res) => {
  try {
    //    const validatedData = matchedData(req.body);

    const newCar = await CarModel.create(req.body);
    return res.status(201).json({
      ok: true,
      msg: "Auto creado con exito",
      data: newCar,
    });
  } catch (err) {
    console.error("Error creando un auto", err);
    return res.status(500).json({
      ok: false,
      msg: "Error interno sel servidor",
    });
  }
};

//* Listar los autos
export const getCars = async (req, res) => {
  try {
    const cars = await CarModel.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    return res.status(200).json({
      ok: true,
      msg: "Autos encontrados",
      data: cars,
    });
  } catch (err) {
    console.error("Error trayendo los autos", err);
    return res.status(500).json({
      ok: false,
      msg: "Error interno sel servidor",
    });
  }
};

//* Traer auto por ID
export const getCarById = async (req, res) => {
  try {
    const { carId } = req.params;

    const car = await CarModel.findByPk(carId, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    return res.status(200).json({
      ok: true,
      msg: "Auto encontrado",
      data: car,
    });
  } catch (err) {
    console.error("Error trayendo el auto", err);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

//* Actualizar un auto
export const updateCar = async (req, res) => {
  try {
    const { carId } = req.params;

    await CarModel.update(req.body, { where: { id: carId } });

    const updatedCar = await CarModel.findByPk(carId);

    return res.status(200).json({
      ok: true,
      msg: "Campos del auto actualizados con exito",
      data: updatedCar,
    });
  } catch (err) {
    console.error("Error actualizando un auto", err);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

//* Eliminar un auto
export const removeCar = async (req, res) => {
  try {
    const { carId } = req.params;

    await CarModel.destroy({ where: { id: carId } });

    return res.status(410).json({
      ok: true,
      msg: "Auto eliminado de la base de datos",
    });
  } catch (err) {
    console.error("Error eliminando un auto", err);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};
