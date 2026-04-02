// components/NavBar.jsx
const NavBar = ({ onAddClick }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 h-16 bg-[#11212D]/85 backdrop-blur-md border-b border-[#1E3040]">
      {/* Logo */}
      <a href="/" className="flex items-baseline gap-1.5 no-underline">
        <span
          className="text-[#CCD0CF] tracking-[3px]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem" }}
        >
          LuxDrive API
        </span>
        <span
          className="text-[#4A5C6A] tracking-[3px]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem" }}
        >
          .
        </span>
        <span className="text-[10px] text-[#4A5C6A] tracking-[2px] uppercase self-center">
          Luxury Cars
        </span>
      </a>

      {/* Nav links + botón */}
      <nav className="flex items-center gap-1">
        <a
          href="/"
          className="text-[11px] tracking-wider uppercase text-[#CCD0CF] px-3 py-1.5 rounded-md hover:bg-[#1E3040] transition-colors no-underline"
        >
          Inicio
        </a>
        <a
          href="/vehiculos"
          className="text-[11px] tracking-wider uppercase text-[#4A5C6A] px-3 py-1.5 rounded-md hover:text-[#9BA8AB] hover:bg-[#1E3040] transition-colors no-underline"
        >
          Vehículos
        </a>

        {/* Divider */}
        <div className="w-px h-4 bg-[#1E3040] mx-2" />

        {/* Botón agregar */}
        <button
          onClick={onAddClick}
          className="flex items-center gap-1.5 text-[11px] tracking-wider uppercase font-medium bg-[#CCD0CF] text-[#06141B] px-4 py-2 rounded-lg hover:opacity-85 transition-opacity"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Agregar
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
