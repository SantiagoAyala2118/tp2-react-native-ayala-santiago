import { Router } from "express";

//* Controladores
import {
  listData,
  listDataById,
  createData,
  updateData,
  removeData,
} from "../controllers/api.controller.js";

const apiRouter = Router();

/*
Crear un sevidor con NodeJS que tenga las siguientes operaciones:
Listar datos (GET)
Obtener un elemento por ID (GET)
Crear un elemento (POST)
Actualizar un elemento (PUT)
Eliminar un elemento (DELETE)
*/

//* Listar datos
apiRouter.get("/list-data", listData);

//* Listar por id
apiRouter.get("/list-data-:id", listDataById);

//* Crear recurso
apiRouter.get("/create-data", createData);

//* Actualizar un recurso
apiRouter.get("/update-data-:id", updateData);

//* Eliminar un recurso
apiRouter.get("/remove-data-:id", removeData);

export default apiRouter;
