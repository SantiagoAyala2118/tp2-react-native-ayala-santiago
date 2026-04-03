// hooks/useCarForm.js
import { useState } from "react";

const useCarForm = (vehicle = null, onSuccess) => {
  const [formData, setFormData] = useState({
    marca: vehicle?.marca ?? "",
    modelo: vehicle?.modelo ?? "",
    anio: vehicle?.anio ?? "",
    precio: vehicle?.precio ?? "",
    kilometraje: vehicle?.kilometraje ?? "",
    imagen: vehicle?.imagenes?.[0] ?? "",
    estado: vehicle?.estado ?? "Nuevo",
    descripcion: vehicle?.descripcion ?? "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //* Funcion que registra los cambios del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //* Funcion que realiza la peticion en caso de enviar el formulario
  const handleSubmit = async () => {
    //* Validación básica
    if (
      !formData.marca ||
      !formData.modelo ||
      !formData.anio ||
      !formData.precio
    ) {
      setError("Completá los campos obligatorios.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payload = {
        marca: formData.marca,
        modelo: formData.modelo,
        anio: Number(formData.anio),
        precio: Number(formData.precio),
        kilometraje: Number(formData.kilometraje),
        estado: formData.estado,
        descripcion: formData.descripcion,
        imagenes: formData.imagen ? [formData.imagen] : [],
      };

      const url = vehicle
        ? `http://localhost:3000/api/car/update/${vehicle.id}`
        : "http://localhost:3000/api/car";

      const method = vehicle ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      onSuccess();
    } catch (err) {
      setError("Hubo un error al guardar el vehículo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, loading, error };
};

export default useCarForm;
