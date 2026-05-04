import { useState, useEffect, useContext, memo, useCallback } from "react";
import VehicleCard from "../components/VehicleCard";
import Loading from "../components/Loading";
import FilterBar from "../components/FilterBar";
import useFilter from "../hooks/useFilter";
import CarForm from "../components/CarForm";
import { useCars } from "../context/carContext";

// const VehicleCardMemorizado = memo(VehicleCard);

const HomePage = () => {
  const { cars, loading, error, showForm, vehicleToEdit, dispatch, getCars } =
    useCars();

  //* Filtro
  const { query, setQuery, filtered } = useFilter(cars);

  //? Funcion para mostrar el formulario al editar un vehiculo
  const handleEdit = useCallback(
    (vehicle) => {
      dispatch({ type: "SET_VEHICLE_TO_EDIT", payload: vehicle });
      dispatch({ type: "SET_SHOW_FORM", payload: true });
    },
    [dispatch], //? Se redefine cuando se ejecuta algun cambio en la funcion
  );

  //? Funcion para eliminar un vehiculo
  const handleDelete = useCallback(
    async (id) => {
      try {
        await fetch(`http://localhost:3000/api/car/remove/${id}`, {
          method: "DELETE",
        });

        dispatch({ type: "DELETE_CAR", payload: id });
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: true });
        console.error("Error eliminando un vehiculo", err);
        return;
      }
    },
    [dispatch],
  );

  //? Funcion para cerrar el formulario
  const handleCloseForm = () => {
    dispatch({ type: "SET_SHOW_FORM", payload: false });
    dispatch({ type: "SET_VEHICLE_TO_EDIT", payload: null });
  };

  return (
    <div>
      {/* HERO */}
      <div className="relative text-center px-8 pt-20 pb-16">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-[#11212D]/60 border border-[#9BA8AB]/15 rounded-full px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3ecfa0]" />
          <span className="text-[11px] text-[#9BA8AB] tracking-[1.5px] uppercase">
            {cars.length} vehículos disponibles
          </span>
        </div>

        {/* Título */}
        <h1
          className="text-[#CCD0CF] leading-none tracking-[4px] mb-5"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.5rem, 8vw, 6rem)",
          }}
        >
          Velocidad<span className="text-[#4A5C6A]">.Lujo.</span>Poder
        </h1>

        {/* Subtítulo */}
        <p className="text-[#4A5C6A] text-sm max-w-md mx-auto mb-10 leading-relaxed font-light">
          Gestioná, explorá y administrá los vehículos más exclusivos del
          mercado desde un solo lugar.
        </p>

        {/* Acciones */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() =>
              document
                .getElementById("flota")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-[11px] tracking-[1.5px] uppercase font-medium bg-[#CCD0CF] text-[#06141B] px-6 py-2.5 rounded-xl hover:opacity-85 transition-opacity"
          >
            Ver flota
          </button>
          <button
            className="text-[11px] tracking-[1.5px] uppercase text-[#9BA8AB] px-6 py-2.5 rounded-xl border border-[#9BA8AB]/20 hover:border-[#9BA8AB]/40 hover:text-[#CCD0CF] transition-all"
            onClick={() => {
              dispatch({ type: "SET_SHOW_FORM", payload: true });
              dispatch({ type: "SET_VEHICLE_TO_EDIT", payload: null });
            }}
          >
            + Agregar vehículo
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="flex justify-center gap-12 px-8 py-8 mx-10 border-y border-[#9BA8AB]/06">
        {[
          { num: cars.length || "—", label: "Vehículos" },
          {
            num: cars.filter((c) => c.estado === "Nuevo").length || "—",
            label: "Nuevos",
          },
          {
            num: cars.filter((c) => c.estado === "Usado").length || "—",
            label: "Usados",
          },
        ].map(({ num, label }) => (
          <div key={label} className="text-center">
            <p
              className="text-[#CCD0CF] tracking-[2px]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "2rem",
              }}
            >
              {num}
            </p>
            <p className="text-[10px] text-[#4A5C6A] tracking-[2px] uppercase mt-0.5">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* FLOTA */}
      <div id="flota" className="px-8 py-12">
        <div className="flex items-baseline justify-between mb-1">
          <h2
            className="text-[#CCD0CF] tracking-[3px]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem" }}
          >
            Vehículos
          </h2>
          <span className="text-[10px] text-[#4A5C6A] tracking-[2px] uppercase">
            {cars.length} unidades
          </span>
        </div>
        <p className="text-[12px] text-[#4A5C6A] mb-6">
          Gestión de flota de lujo
        </p>

        {/* Búsqueda */}
        <FilterBar query={query} onChange={setQuery} />

        {/* Cards */}
        {error ? (
          <p className="text-center text-[#c45a5a] py-10 tracking-widest uppercase text-xs">
            Hubo un error al cargar los vehículos.
          </p>
        ) : loading ? (
          <Loading />
        ) : (
          <VehicleCard
            data={filtered}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>

      {/*Formulario*/}
      {showForm && (
        <CarForm
          vehicle={vehicleToEdit}
          onSuccess={getCars}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default HomePage;
