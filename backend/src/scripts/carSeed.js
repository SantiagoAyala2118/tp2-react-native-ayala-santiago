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
    imagenes: [
      "/img/imagenLamboEvo1.jpg",
      "/img/imagenLamboEvo2.jpg",
      "/img/imagenLamboEvo3.jpg",
    ],
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
    imagenes: [
      "/img/ferrariF8Tributo1.jpg",
      "/img/ferrariF8Tributo2.jpg",
      "/img/ferrariF8Tributo3.jpg",
    ],
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
    imagenes: [
      "/img/porsche911Gt3_1.jpg",
      "/img/porsche911Gt3_2.jpg",
      "/img/porsche911Gt3_3.jpg",
    ],
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
    imagenes: [
      "/img/mclaren720s_1.jpg",
      "/img/mclaren720s_2.jpg",
      "/img/mclaren720s_3.jpg",
    ],
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
    imagenes: [
      "/img/astonMartinVantage_1.jpg",
      "/img/astonMartinVantage_2.jpg",
      "/img/astonMartinVantage_3.jpg",
    ],
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
    imagenes: [
      "/img/bugatiChironSuperSport_1.jpg",
      "/img/bugatiChironSuperSport_2.jpg",
      "/img/bugatiChironSuperSport_3.jpg",
    ],
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
    imagenes: [
      "/img/mercedesAMGGTBlackSeries_1.jpg",
      "/img/mercedesAMGGTBlackSeries_2.jpg",
      "/img/mercedesAMGGTBlackSeries_3.jpg",
    ],
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
