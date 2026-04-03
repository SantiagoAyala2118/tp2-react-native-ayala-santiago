// components/CarForm.jsx
import useCarForm from "../hooks/useCarForm";

//? Campos del formulario, para no escribirlos en cada imput
const fields = [
  { name: "marca", label: "Marca", type: "text", placeholder: "Lamborghini" },
  { name: "modelo", label: "Modelo", type: "text", placeholder: "Huracán EVO" },
  { name: "anio", label: "Año", type: "number", placeholder: "2024" },
  {
    name: "precio",
    label: "Precio (USD)",
    type: "number",
    placeholder: "350000",
  },
  {
    name: "kilometraje",
    label: "Kilometraje",
    type: "number",
    placeholder: "0",
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
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(6,20,27,0.92)", backdropFilter: "blur(6px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-[#11212D] border border-[#253745] rounded-2xl w-[480px] max-w-[95vw] overflow-hidden"
        style={{ animation: "slideUp 0.25s ease" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1E3040]">
          <div>
            <p className="text-[10px] tracking-[2px] uppercase text-[#4A5C6A]">
              {isEdit ? "Modificar vehículo" : "Nuevo vehículo"}
            </p>
            <p
              className="text-[#CCD0CF] tracking-wide leading-none mt-1"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.6rem",
              }}
            >
              {isEdit
                ? `${vehicle.marca} ${vehicle.modelo}`
                : "Agregar a la flota"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1E3040] border border-[#253745] flex items-center justify-center text-[#9BA8AB] hover:opacity-75 transition-opacity text-sm"
          >
            ✕
          </button>
        </div>

        {/* Campos */}
        <div className="px-6 py-5 flex flex-col gap-3">
          {fields.map(({ name, label, type, placeholder }) => (
            <div key={name}>
              <label className="text-[10px] tracking-[1.5px] uppercase text-[#4A5C6A] mb-1.5 block">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full bg-[#06141B] border border-[#1E3040] rounded-lg px-4 py-2.5 text-sm text-[#9BA8AB] outline-none placeholder-[#4A5C6A] focus:border-[#4A5C6A] transition-colors"
              />
            </div>
          ))}

          {/* Estado */}
          <div>
            <label className="text-[10px] tracking-[1.5px] uppercase text-[#4A5C6A] mb-1.5 block">
              Estado
            </label>
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full bg-[#06141B] border border-[#1E3040] rounded-lg px-4 py-2.5 text-sm text-[#9BA8AB] outline-none focus:border-[#4A5C6A] transition-colors"
            >
              <option value="Nuevo">Nuevo</option>
              <option value="Usado">Usado</option>
            </select>
          </div>

          {/* Descripción */}
          <div>
            <label className="text-[10px] tracking-[1.5px] uppercase text-[#4A5C6A] mb-1.5 block">
              Descripción
            </label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Describí el vehículo..."
              rows={3}
              className="w-full bg-[#06141B] border border-[#1E3040] rounded-lg px-4 py-2.5 text-sm text-[#9BA8AB] outline-none placeholder-[#4A5C6A] focus:border-[#4A5C6A] transition-colors resize-none"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-[11px] text-[#c45a5a] tracking-wide">{error}</p>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="text-[11px] tracking-wider uppercase px-5 py-2.5 rounded-lg bg-[#1E3040] text-[#9BA8AB] border border-[#253745] hover:opacity-75 transition-opacity"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="text-[11px] tracking-wider uppercase px-5 py-2.5 rounded-lg bg-[#CCD0CF] text-[#06141B] font-medium hover:opacity-85 transition-opacity disabled:opacity-50"
          >
            {loading
              ? "Guardando..."
              : isEdit
                ? "Guardar cambios"
                : "Agregar vehículo"}
          </button>
        </div>
      </div>

      <style>{`@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
};

export default CarForm;
