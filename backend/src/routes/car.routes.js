import { Router } from "express";

//* Controladores
import {
  getCars,
  getCarById,
  createCar,
  updateCar,
  removeCar,
} from "../controllers/car.controller.js";

const carRouter = Router();

//* Listar datos
carRouter.get("/cars", getCars);

//* Listar por id
carRouter.get("/car/:id", getCarById);

//* Crear recurso
carRouter.get("/create-car", createCar);

//* Actualizar un recurso
carRouter.get("/update-car/:id", updateCar);

//* Eliminar un recurso
carRouter.get("/remove-car/:id", removeCar);

export default carRouter;
