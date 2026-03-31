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
carRouter.get("/car/:carId", getCarById);

//* Crear recurso
carRouter.post("/create-car", createCar);

//* Actualizar un recurso
carRouter.put("/update-car/:carId", updateCar);

//* Eliminar un recurso
carRouter.delete("/remove-car/:carId", removeCar);

export default carRouter;
