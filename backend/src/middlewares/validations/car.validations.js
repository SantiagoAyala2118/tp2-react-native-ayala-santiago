import { body } from "express-validator";
import { CarModel } from "../../models/car.model.js";

export const createCarValidations = [
  body("marca")
    .trim()
    .notEmpty()
    .withMessage('El campo "marca" es obligatorio')
    .isString()
    .withMessage('El campo "marca" debe ser un string (texto)'),
  body("modelo")
    .trim()
    .notEmpty()
    .withMessage('El campo "modelo" es obligatorio')
    .isString()
    .withMessage('El campo "modelo" debe ser un string (texto)'),
  body("anio")
    .trim()
    .notEmpty()
    .withMessage('El campo "año" es obligatorio')
    .isInt()
    .withMessage('El campo "año" debe ser un numero entero'),
  body("precio")
    .trim()
    .notEmpty()
    .withMessage('El campo "precio" es obligatorio')
    .isFloat()
    .withMessage('El campo "precio" debe ser un numero decimal'),
  body("kilometraje")
    .trim()
    .notEmpty()
    .withMessage('El campo "kilometraje" es obligatorio')
    .isInt()
    .withMessage('El campo "kilometraje" debe ser un numero entero'),
  body("estado")
    .trim()
    .notEmpty()
    .withMessage('El campo "estado" es obligatorio')
    .isIn(["Nuevo", "Usado"])
    .withMessage('El estado solo puede ser "Nuevo" o "Usado"'),
  body("descripcion")
    .optional()
    .trim()
    .notEmpty()
    .withMessage('El campo "descripcion" (si se ingresa) no puede estar vacio'),
  body("imgURL")
    .optional()
    .trim()
    .notEmpty()
    .withMessage(
      "En caso de ingresar una imagen para el vehiculo, no puede mandar el campo vacio",
    ),
];
