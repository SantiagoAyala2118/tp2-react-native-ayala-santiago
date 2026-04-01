import { useState, useEffect } from "react";
import VehicleCard from "./components/VehicleCard";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(false);

  const getCars = async () => {
    try {
      setError(false);

      const response = await fetch("http://localhost:3000/api/cars");
      const data = await response.json();

      setCars(data.data);
    } catch (err) {
      setError(true);
      console.error("Error al traer los autos:", err);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      {error ? (
        <p>Hubo un error al cargar los vehículos.</p>
      ) : (
        <VehicleCard data={cars} />
      )}
    </div>
  );
}

export default App;
