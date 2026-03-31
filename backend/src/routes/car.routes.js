import { Router } from "express";

//* Controladores
import {
  getCars,
  getCarById,
  createCar,
  updateCar,
  removeCar,
} from "../controllers/car.controller.js";

//* Middlewares de validacion
import {
  createCarValidations,
  CarByIdValidations,
  updateCarValidations,
} from "../middlewares/validations/car.validations.js";
import { applyValidations } from "../middlewares/validator.js";

const carRouter = Router();

//* Listar datos
carRouter.get("/cars", getCars);

//* Listar por id
carRouter.get("/car/:carId", CarByIdValidations, applyValidations, getCarById);

//* Crear recurso
carRouter.post("/car", createCarValidations, applyValidations, createCar);

//* Actualizar un recurso
carRouter.put(
  "/car/update/:carId",
  updateCarValidations,
  applyValidations,
  updateCar,
);

//* Eliminar un recurso
carRouter.delete(
  "/car/remove/:carId",
  CarByIdValidations,
  applyValidations,
  removeCar,
);

export default carRouter;
