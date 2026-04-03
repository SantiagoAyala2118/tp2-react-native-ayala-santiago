// scripts/carSeed.js
import "dotenv/config";
import { sequelize } from "../config/database.js";
import { CarModel } from "../models/car.model.js";

const autosDeLujo = [
  // --- TUS 7 AUTOS ORIGINALES ---
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
  {
    marca: "Rolls-Royce",
    modelo: "Ghost",
    anio: 2023,
    precio: 340000,
    kilometraje: 1500,
    estado: "Usado",
    descripcion:
      "El pináculo del lujo automotriz. Suspensión de alfombra mágica y un interior inigualable con techo estrellado.",
    imagenes: [
      "/img/rollsRoyceGhost_1.jpg",
      "/img/rollsRoyceGhost_2.jpg",
      "/img/rollsRoyceGhost_3.jpg",
    ],
  },
  {
    marca: "Audi",
    modelo: "R8 V10 Performance",
    anio: 2024,
    precio: 250000,
    kilometraje: 0,
    estado: "Nuevo",
    descripcion:
      "El superdeportivo de uso diario por excelencia. Motor V10 atmosférico que comparte corazón con Lamborghini.",
    imagenes: ["/img/audiR8_1.jpg", "/img/audiR8_2.jpg", "/img/audiR8_3.jpg"],
  },
  {
    marca: "Koenigsegg",
    modelo: "Jesko",
    anio: 2023,
    precio: 3000000,
    kilometraje: 500,
    estado: "Usado",
    descripcion:
      "Una obra maestra de la ingeniería sueca. Más de 1600 HP diseñados para romper récords mundiales de velocidad.",
    imagenes: [
      "/img/koenigseggJesko_1.jpg",
      "/img/koenigseggJesko_2.jpg",
      "/img/koenigseggJesko_3.jpg",
    ],
  },
  {
    marca: "Pagani",
    modelo: "Huayra Roadster",
    anio: 2021,
    precio: 2800000,
    kilometraje: 3200,
    estado: "Usado",
    descripcion:
      "Arte sobre ruedas. Detalles en titanio, fibra de carbono expuesta y un motor V12 biturbo firmado por AMG.",
    imagenes: [
      "/img/paganiHuayra_1.jpg",
      "/img/paganiHuayra_2.jpg",
      "/img/paganiHuayra_3.jpg",
    ],
  },
  {
    marca: "Bentley",
    modelo: "Continental GT",
    anio: 2024,
    precio: 280000,
    kilometraje: 0,
    estado: "Nuevo",
    descripcion:
      "El equilibrio perfecto entre rendimiento explosivo y lujo artesanal inigualable para viajar en primera clase.",
    imagenes: [
      "/img/bentleyContinental_1.jpg",
      "/img/bentleyContinental_2.jpg",
      "/img/bentleyContinental_3.jpg",
    ],
  },
  {
    marca: "Maserati",
    modelo: "MC20",
    anio: 2023,
    precio: 220000,
    kilometraje: 1200,
    estado: "Usado",
    descripcion:
      "El renacimiento deportivo de Maserati. Chasis ultraligero y el innovador motor Nettuno V6 con tecnología de F1.",
    imagenes: [
      "/img/maseratiMC20_1.jpg",
      "/img/maseratiMC20_2.jpg",
      "/img/maseratiMC20_3.jpg",
    ],
  },
  {
    marca: "Nissan",
    modelo: "GT-R Nismo",
    anio: 2022,
    precio: 210000,
    kilometraje: 8000,
    estado: "Usado",
    descripcion:
      "El legendario Godzilla en su máxima expresión. Ingeniería de precisión japonesa enfocada en la eficacia en pista.",
    imagenes: [
      "/img/nissanGTR_1.jpg",
      "/img/nissanGTR_2.jpg",
      "/img/nissanGTR_3.jpg",
    ],
  },
  {
    marca: "Lexus",
    modelo: "LFA",
    anio: 2012,
    precio: 950000,
    kilometraje: 25000,
    estado: "Usado",
    descripcion:
      "Una leyenda automotriz. Considerado por muchos como el auto con el mejor sonido de escape de la historia gracias a su V10 desarrollado por Yamaha.",
    imagenes: [
      "/img/lexusLFA_1.jpg",
      "/img/lexusLFA_2.jpg",
      "/img/lexusLFA_3.jpg",
    ],
  },
];

const seedDatabase = async () => {
  try {
    //* Si existen registros, los borra y los crea de nuevo (solo para desarrollo)
    await sequelize.sync({ force: true });
    console.log("Tabla 'Cars' sincronizada correctamente.");

    //* Función para crear todos los registros de una
    await CarModel.bulkCreate(autosDeLujo);
    console.log(
      "¡Seeding completado! Tus 15 naves de lujo ya están en la base de datos.",
    );

    //* Se corta el proceso
    process.exit(0);
  } catch (error) {
    console.error("Hubo un error al ejecutar el seeder:", error);
    process.exit(1);
  }
};

seedDatabase();
