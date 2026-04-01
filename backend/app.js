//? --------------------------------------Importaciones
import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./src/routes/index.routes.js";
import { initDB } from "./src/config/db.js";
initDB();

const app = express();
const PORT = process.env.PORT;

//? --------------------------------------Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
  }),
);
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
