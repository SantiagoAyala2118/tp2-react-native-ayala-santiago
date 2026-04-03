// components/CarForm.jsx
import useCarForm from "../hooks/useCarForm";

// Agregamos el campo imagen y una propiedad colSpan para saber si ocupa 1 o 2 columnas
const fields = [
  {
    name: "marca",
    label: "Marca",
    type: "text",
    placeholder: "Lamborghini",
    colSpan: 1,
  },
  {
    name: "modelo",
    label: "Modelo",
    type: "text",
    placeholder: "Huracán EVO",
    colSpan: 1,
  },
  {
    name: "anio",
    label: "Año",
    type: "number",
    placeholder: "2024",
    colSpan: 1,
  },
  {
    name: "precio",
    label: "Precio (USD)",
    type: "number",
    placeholder: "350000",
    colSpan: 1,
  },
  {
    name: "kilometraje",
    label: "Kilometraje",
    type: "number",
    placeholder: "0",
    colSpan: 1,
  },
  // El Select de Estado iría acá para completar la segunda columna (lo manejamos manual abajo)
  {
    name: "imagen",
    label: "URL de Imagen",
    type: "text",
    placeholder: "https://.../auto.jpg",
    colSpan: 2,
  },
];

const CarForm = ({ vehicle = null, onSuccess, onClose }) => {
  const { formData, handleChange, handleSubmit, loading, error } = useCarForm(
    vehicle,
    () => {
      onSuccess();
      onClose();
    },
  );

  const isEdit = !!vehicle;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(6,20,27,0.92)", backdropFilter: "blur(6px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Contenedor Principal: Más ancho y dividido en flex-row */}
      <div
        className="bg-[#11212D] border border-[#253745] rounded-2xl w-[850px] max-w-full flex flex-col md:flex-row overflow-hidden shadow-2xl"
        style={{ animation: "slideUp 0.25s ease" }}
      >
        {/* PANEL IZQUIERDO: Estilo Visual / Branding */}
        <div className="hidden md:flex flex-col justify-between w-2/5 bg-gradient-to-br from-[#06141B] to-[#11212D] p-8 border-r border-[#1E3040]">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#CCD0CF]"></div>
              <span className="text-[#CCD0CF] font-bold tracking-widest text-sm">
                LuxDrive API
              </span>
            </div>
            <h2
              className="text-3xl text-[#CCD0CF] mb-4 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {isEdit ? "Actualizá tu flota" : "Expandí tu colección"}
            </h2>
            <p className="text-[#4A5C6A] text-sm leading-relaxed">
              Completá los datos técnicos del vehículo para mantener el
              inventario sincronizado con la base de datos de lujo.
            </p>
          </div>

          {/* Indicadores de paso (decorativos) */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 bg-[#1E3040]/50 p-3 rounded-lg border border-[#253745]">
              <div className="w-6 h-6 rounded-full bg-[#CCD0CF] text-[#06141B] flex items-center justify-center text-xs font-bold">
                1
              </div>
              <span className="text-xs text-[#CCD0CF] uppercase tracking-wider">
                Datos del vehículo
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg opacity-50">
              <div className="w-6 h-6 rounded-full border border-[#4A5C6A] text-[#4A5C6A] flex items-center justify-center text-xs font-bold">
                2
              </div>
              <span className="text-xs text-[#4A5C6A] uppercase tracking-wider">
                Confirmación
              </span>
            </div>
          </div>
        </div>

        {/* PANEL DERECHO: Formulario */}
        <div className="w-full md:w-3/5 flex flex-col">
          {/* Header del panel derecho */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-[#1E3040]">
            <div>
              <p className="text-[10px] tracking-[2px] uppercase text-[#4A5C6A]">
                {isEdit ? "Modificar vehículo" : "Nuevo vehículo"}
              </p>
              <h3 className="text-[#CCD0CF] text-xl font-medium mt-1">
                {isEdit
                  ? `${vehicle.marca} ${vehicle.modelo}`
                  : "Ingresar datos"}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#1E3040] border border-[#253745] flex items-center justify-center text-[#9BA8AB] hover:text-white hover:bg-[#253745] transition-all text-sm"
            >
              ✕
            </button>
          </div>

          {/* Grid de Campos */}
          <div className="px-8 py-6 flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {/* Mapeamos los campos básicos */}
              {fields.map(({ name, label, type, placeholder, colSpan }) => (
                <div
                  key={name}
                  className={colSpan === 2 ? "col-span-2" : "col-span-1"}
                >
                  <label className="text-[10px] tracking-[1.5px] uppercase text-[#4A5C6A] mb-1.5 block">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full bg-[#06141B] border border-[#1E3040] rounded-lg px-4 py-2 text-sm text-[#9BA8AB] outline-none placeholder-[#253745] focus:border-[#CCD0CF] focus:text-[#CCD0CF] transition-colors"
                  />
                </div>
              ))}

              {/* El Select de Estado (col-span-1 para que quede al lado del kilometraje) */}
              <div className="col-span-1">
                <label className="text-[10px] tracking-[1.5px] uppercase text-[#4A5C6A] mb-1.5 block">
                  Estado
                </label>
                <select
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  className="w-full bg-[#06141B] border border-[#1E3040] rounded-lg px-4 py-2 text-sm text-[#9BA8AB] outline-none focus:border-[#CCD0CF] focus:text-[#CCD0CF] transition-colors appearance-none"
                >
                  <option value="Nuevo">Nuevo</option>
                  <option value="Usado">Usado</option>
                </select>
              </div>

              {/* Descripción ocupa el ancho total (col-span-2) */}
              <div className="col-span-2 mt-2">
                <label className="text-[10px] tracking-[1.5px] uppercase text-[#4A5C6A] mb-1.5 block">
                  Descripción
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  placeholder="Describí el vehículo..."
                  rows={2}
                  className="w-full bg-[#06141B] border border-[#1E3040] rounded-lg px-4 py-2 text-sm text-[#9BA8AB] outline-none placeholder-[#253745] focus:border-[#CCD0CF] focus:text-[#CCD0CF] transition-colors resize-none"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-[12px] text-red-400 tracking-wide text-center">
                  {error}
                </p>
              </div>
            )}
          </div>

          {/* Footer de Botones */}
          <div className="px-8 py-5 bg-[#06141B]/50 border-t border-[#1E3040] flex justify-end gap-3">
            <button
              onClick={onClose}
              className="text-[11px] tracking-wider uppercase px-6 py-2.5 rounded-lg bg-transparent text-[#9BA8AB] hover:text-[#CCD0CF] transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="text-[11px] tracking-wider uppercase px-8 py-2.5 rounded-lg bg-[#CCD0CF] text-[#06141B] font-bold hover:bg-white transition-colors disabled:opacity-50 shadow-lg shadow-[#CCD0CF]/10"
            >
              {loading
                ? "Guardando..."
                : isEdit
                  ? "Guardar cambios"
                  : "Registrar nave"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(20px) scale(0.98); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }
      `}</style>
    </div>
  );
};

export default CarForm;
