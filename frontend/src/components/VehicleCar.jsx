const VehicleCard = ({ data }) => {
  if (!Array.isArray(data)) return <p>Cargando vehículos...</p>;

  const renderCars = data.map((vehicle) => {
    return (
      <li key={vehicle.id}>
        {vehicle.marca} {vehicle.modelo} - Año {vehicle.anio}
      </li>
    );
  });

  return (
    <div>
      <ul>{renderCars}</ul>
    </div>
  );
};

export default VehicleCard;
