// scripts/carSeed.js
import "dotenv/config";
import { sequelize } from "../config/database.js";
import { CarModel } from "../models/car.model.js";

const autosDeLujo = [
  {
    marca: "Lamborghini",
    modelo: "Huracán EVO",
    anio: 2022,
    precio: 350000,
    kilometraje: 12000,
    estado: "Usado",
    descripcion:
      "Motor V10 atmosférico, color Giallo Inti. Un verdadero misil tierra-tierra con tracción integral.",
    imgURL:
      "https://images.unsplash.com/photo-1544636331-e26879cd3d92?auto=format&fit=crop&w=800&q=80",
  },
  {
    marca: "Ferrari",
    modelo: "F8 Tributo",
    anio: 2023,
    precio: 420000,
    kilometraje: 0,
    estado: "Nuevo",
    descripcion:
      "El V8 más potente de la historia de Ferrari. Diseño aerodinámico impecable en el clásico Rosso Corsa.",
    imgURL:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80",
  },
  {
    marca: "Porsche",
    modelo: "911 GT3 RS",
    anio: 2024,
    precio: 310000,
    kilometraje: 0,
    estado: "Nuevo",
    descripcion:
      "Nacido para la pista pero legal para la calle. Aerodinámica activa y un motor bóxer que grita a 9.000 RPM.",
    imgURL:
      "https://images.unsplash.com/photo-1503376710356-748c1f09c258?auto=format&fit=crop&w=800&q=80",
  },
  {
    marca: "McLaren",
    modelo: "720S",
    anio: 2021,
    precio: 299000,
    kilometraje: 8500,
    estado: "Usado",
    descripcion:
      "Ingeniería británica en su máxima expresión. Chasis de fibra de carbono y puertas diédricas.",
    imgURL:
      "https://images.unsplash.com/photo-1621007947382-bb3c399b52c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    marca: "Aston Martin",
    modelo: "Vantage",
    anio: 2020,
    precio: 185000,
    kilometraje: 21000,
    estado: "Usado",
    descripcion:
      "Elegancia y agresividad. Un gran turismo con alma de deportivo puro y un sonido de escape inconfundible.",
    imgURL:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
  },
  {
    marca: "Bugatti",
    modelo: "Chiron Super Sport",
    anio: 2024,
    precio: 3800000,
    kilometraje: 0,
    estado: "Nuevo",
    descripcion:
      "La cúspide de la ingeniería automotriz. Motor W16 con cuatro turbos capaz de superar los 400 km/h con total lujo.",
    imgURL:
      "https://images.unsplash.com/photo-1600832019566-b33346e2a9b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    marca: "Mercedes-AMG",
    modelo: "GT Black Series",
    anio: 2022,
    precio: 450000,
    kilometraje: 3200,
    estado: "Usado",
    descripcion:
      "El rey de Nürburgring. Aerodinámica extrema derivada de la categoría GT3 y un V8 biturbo brutal.",
    imgURL:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
  },
];

const seedDatabase = async () => {
  try {
    //* Si existen rejistros, los borra y los crea de nuevo (solo para desarrollo)
    await sequelize.sync({ force: true });
    console.log("Tabla 'Cars' sincronizada correctamente.");

    //* Funcion para crear todos los registros de una
    await CarModel.bulkCreate(autosDeLujo);
    console.log(
      "¡Seeding completado! Tus naves de lujo ya están en la base de datos.",
    );

    //* Se corta el proceso
    process.exit(0);
  } catch (error) {
    console.error("Hubo un error al ejecutar el seeder:", error);
    process.exit(1);
  }
};

seedDatabase();
