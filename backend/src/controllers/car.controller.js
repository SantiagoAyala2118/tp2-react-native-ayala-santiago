//? ----------------------------------------------Importaciones
import { carModel } from "../models/car.model.js";
import { matchedData } from "express-validator";

//? ---------------------------------------------- Controladores
export const createCar = async (req, res) => {
  try {
    //    const validatedData = matchedData(req.body);

    const newCar = await carModel.create(req.body);
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

export const getCars = async (req, res) => {
  try {
    const cars = await carModel.findAll();

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

export const getCarById = async (req, res) => {};

export const updateCar = async (req, res) => {};

export const removeCar = async (req, res) => {};
