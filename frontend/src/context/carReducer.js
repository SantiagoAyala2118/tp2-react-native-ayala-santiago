export const carReducer = (state, action) => {
  switch (action.type) {
    case "SET_CARS":
      //* Traer los autos del backend
      return { ...state, cars: action.payload };

    case "ADD_CAR":
      //* Agregar un auto
      return { ...state, cars: [...state.cars, action.payload] };

    case "EDIT_CAR":
      //* Busca el auto por id y lo reemplaza con los datos nuevos
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload ? action.payload : car,
        ),
      };

    case "DELETE_CAR":
      //* Filtra por id y quita el auto
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "SET_SHOW_FORM":
      return { ...state, showForm: action.payload };

    case "SET_VEHICLE_TO_EDIT":
      return { ...state, vehicleToEdit: action.payload };

    default:
      return state;
  }
};
