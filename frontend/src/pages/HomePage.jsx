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

      setLoading(false);
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
      {error ? (
        <p>Hubo un error al cargar los vehículos.</p>
      ) : loading ? (
        <Loading />
      ) : (
        <VehicleCard data={cars} />
      )}
    </div>
  );
};

export default HomePage;
