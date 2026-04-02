// pages/HomePage.jsx
import { useState, useEffect } from "react";
import VehicleCard from "../components/VehicleCard";
import Loading from "../components/Loading";

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getCars = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/cars");
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 700));
      setCars(data.data);
    } catch (err) {
      setError(true);
      console.error("Error al traer los autos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      {/* Header de página */}
      <div className="flex items-baseline justify-between mb-1">
        <h1
          className="text-[#CCD0CF] tracking-[3px]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem" }}
        >
          Vehículos
        </h1>
        <span className="text-[11px] text-[#4A5C6A] tracking-widest uppercase">
          {cars.length} unidades
        </span>
      </div>
      <p className="text-[13px] text-[#4A5C6A] mb-8">
        Gestión de flota de lujo
      </p>

      {/* Contenido */}
      {error ? (
        <p className="text-center text-[#c45a5a] py-10 tracking-widest uppercase text-xs">
          Hubo un error al cargar los vehículos.
        </p>
      ) : loading ? (
        <Loading />
      ) : (
        <VehicleCard data={cars} />
      )}
    </div>
  );
};

export default HomePage;
