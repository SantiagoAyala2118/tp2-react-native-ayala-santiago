// components/VehicleModal.jsx
import { useState, useEffect } from "react";

const VehicleModal = ({ vehicle, onClose, onEdit, onDelete }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const imagenes = vehicle.imagenes || [];

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const changeImg = (dir) => {
    setImgIdx((prev) => (prev + dir + imagenes.length) % imagenes.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(6,20,27,0.92)", backdropFilter: "blur(6px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-[#11212D] border border-[#253745] rounded-2xl w-[420px] max-w-[95vw] overflow-hidden"
        style={{ animation: "slideUp 0.25s ease" }}
      >
        {/* Sección imagen + carrusel */}
        <div className="relative h-72 bg-[#06141B] overflow-hidden">
          {imagenes.length > 0 ? (
            <img
              src={imagenes[imgIdx]}
              alt={`${vehicle.marca} ${vehicle.modelo}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4A5C6A"
                strokeWidth="1"
              >
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <span className="text-xs text-[#4A5C6A] tracking-widest uppercase">
                Sin fotos disponibles
              </span>
            </div>
          )}

          {/* Gradiente inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#11212D] to-transparent pointer-events-none" />

          {/* Contador */}
          {imagenes.length > 0 && (
            <div className="absolute top-3 left-3 text-[11px] text-[#9BA8AB] bg-[rgba(6,20,27,0.7)] border border-[#253745] rounded-full px-3 py-1 tracking-wide">
              {imgIdx + 1} / {imagenes.length}
            </div>
          )}

          {/* Cerrar */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[rgba(6,20,27,0.7)] border border-[#253745] flex items-center justify-center text-[#9BA8AB] hover:bg-[rgba(6,20,27,0.95)] transition-colors text-sm"
          >
            ✕
          </button>

          {/* Flechas carrusel */}
          {imagenes.length > 1 && (
            <>
              <button
                onClick={() => changeImg(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[rgba(6,20,27,0.75)] border border-[#253745] flex items-center justify-center text-[#9BA8AB] hover:bg-[rgba(6,20,27,0.95)] transition-colors text-lg"
              >
                ‹
              </button>
              <button
                onClick={() => changeImg(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[rgba(6,20,27,0.75)] border border-[#253745] flex items-center justify-center text-[#9BA8AB] hover:bg-[rgba(6,20,27,0.95)] transition-colors text-lg"
              >
                ›
              </button>
            </>
          )}

          {/* Dots */}
          {imagenes.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {imagenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === imgIdx
                      ? "w-4 h-1.5 bg-[#CCD0CF]"
                      : "w-1.5 h-1.5 bg-[#4A5C6A]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Cuerpo */}
        <div className="p-6">
          <p className="text-[10px] tracking-[2.5px] uppercase text-[#4A5C6A]">
            {vehicle.marca}
          </p>
          <p
            className="text-[#CCD0CF] leading-none tracking-wide mb-3"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2.2rem",
            }}
          >
            {vehicle.modelo}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Año", val: vehicle.anio },
              {
                label: "Km",
                val: `${vehicle.kilometraje?.toLocaleString("es-AR")} km`,
              },
              { label: "Estado", val: vehicle.estado },
            ].map(({ label, val }) => (
              <div
                key={label}
                className="bg-[#06141B] border border-[#1E3040] rounded-xl p-3"
              >
                <p className="text-[9px] tracking-[1.5px] uppercase text-[#4A5C6A] mb-1">
                  {label}
                </p>
                <p
                  className="text-[#9BA8AB] tracking-wide"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  {val}
                </p>
              </div>
            ))}
          </div>

          {/* Descripción */}
          <p className="text-xs text-[#4A5C6A] leading-relaxed italic mb-5">
            {vehicle.descripcion}
          </p>

          {/* Precio + acciones */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] tracking-[2px] uppercase text-[#4A5C6A] mb-1">
                Precio
              </p>
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
                }}
                className="text-[#CCD0CF] tracking-wide"
              >
                <span className="text-[#4A5C6A] text-base">USD </span>
                {vehicle.precio?.toLocaleString("es-AR")}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  onEdit?.(vehicle);
                  onClose();
                }}
                className="text-xs px-4 py-2 rounded-lg bg-[#1E3040] text-[#9BA8AB] border border-[#253745] hover:opacity-75 transition-opacity"
              >
                Editar
              </button>
              <button
                onClick={() => {
                  onDelete?.(vehicle.id);
                  onClose();
                }}
                className="text-xs px-4 py-2 rounded-lg bg-[#2d1010] text-[#c45a5a] border border-[#4a1f1f] hover:opacity-75 transition-opacity"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
};

export default VehicleModal;
