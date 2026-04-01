// components/VehicleCard.jsx
import { useState } from "react";
import VehicleModal from "./VehicleModal";

const VehicleCard = ({ data, onEdit, onDelete }) => {
  const [selected, setSelected] = useState(null);

  if (!Array.isArray(data)) {
    return (
      <p className="text-center text-[#4A5C6A] py-10 tracking-widest uppercase text-sm">
        Cargando vehículos...
      </p>
    );
  }

  return (
    <>
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))" }}
      >
        {data.map((vehicle) => {
          const imagenes = Array.isArray(vehicle.imagenes)
            ? vehicle.imagenes
            : typeof vehicle.imagenes === "string"
              ? JSON.parse(vehicle.imagenes)
              : [];

          return (
            <div
              key={vehicle.id}
              onClick={() => setSelected({ ...vehicle, imagenes })}
              className="bg-[#11212D] border border-[#1E3040] rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-[#4A5C6A]"
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden bg-[#06141B]">
                {imagenes[0] ? (
                  <img
                    src={imagenes[0]}
                    alt={`${vehicle.marca} ${vehicle.modelo}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4A5C6A"
                      strokeWidth="1.2"
                    >
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                    <span className="text-[11px] text-[#4A5C6A] tracking-wide">
                      Sin imagen
                    </span>
                  </div>
                )}
                {/* Gradiente */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#11212D] to-transparent" />
                {/* Badge estado */}
                <span
                  className={`absolute top-3 right-3 text-[10px] tracking-wide px-3 py-1 rounded-full font-medium border ${
                    vehicle.estado === "Nuevo"
                      ? "bg-[#0d3328] text-[#3ecfa0] border-[#1a5a45]"
                      : "bg-[#2a1f0a] text-[#c48a2f] border-[#4a3515]"
                  }`}
                >
                  {vehicle.estado}
                </span>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-[10px] tracking-[2px] uppercase text-[#4A5C6A]">
                  {vehicle.marca}
                </p>
                <p
                  className="text-[#CCD0CF] leading-none tracking-wide mb-3"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.6rem",
                  }}
                >
                  {vehicle.modelo}
                </p>
                <div className="flex justify-between items-end">
                  <span className="text-xs text-[#4A5C6A]">{vehicle.anio}</span>
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.1rem",
                    }}
                    className="text-[#9BA8AB] tracking-wide"
                  >
                    <span className="text-[#4A5C6A] text-xs">USD </span>
                    {vehicle.precio?.toLocaleString("es-AR")}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selected && (
        <VehicleModal
          vehicle={selected}
          onClose={() => setSelected(null)}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default VehicleCard;
