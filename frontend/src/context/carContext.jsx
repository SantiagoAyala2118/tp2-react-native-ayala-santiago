import { createContext, useContext, useReducer, useEffect } from "react";
import { carReducer } from "./carReducer";

// 1. Estado inicial
const initialState = {
  cars: [],
  loading: false,
  error: false,
  showForm: false,
  vehicleToEdit: null,
};

//* Contexto
const CarContext = createContext();

//* Porvider
export const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  //* Pide los autos del backend
  const getCars = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await fetch("http://localhost:3000/api/cars");
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 700));
      dispatch({ type: "SET_CARS", payload: data.data });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: true });
      console.error("Error al traer los autos:", err);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  //* Todo lo que queremos compartir con la app
  const value = {
    ...state, // cars, loading, error, showForm, vehicleToEdit
    dispatch, // para despachar acciones
    getCars, // para recargar la lista
  };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};

//* Hook personalizado para usar el contexto
export const useCars = () => useContext(CarContext);
