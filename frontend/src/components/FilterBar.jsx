const FilterBar = ({ query, onChange }) => {
  return (
    <div className="flex items-center gap-2 bg-[#11212D]/80 border border-[#9BA8AB]/10 rounded-lg px-4 py-2.5 max-w-sm mb-8">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4A5C6A"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por marca o modelo..."
        className="bg-transparent border-none outline-none text-[#9BA8AB] text-sm w-full placeholder-[#4A5C6A]"
      />
      {/* Limpiar búsqueda si hay texto */}
      {query && (
        <button
          onClick={() => onChange("")}
          className="text-[#4A5C6A] hover:text-[#9BA8AB] transition-colors text-xs"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default FilterBar;
