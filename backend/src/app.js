//? --------------------------------------Importaciones
import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

//? --------------------------------------Middlewares
app.use(express.json());
app.use("/api", router);
app.use(
  cors({
    methods: ["POST", "GET", "PUT", "DELETE"],
    origin: "http://localhost:5173",
  }),
);

app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
