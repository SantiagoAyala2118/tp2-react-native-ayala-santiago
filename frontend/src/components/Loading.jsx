const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16">
      {/* Spinner */}
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-[#1E3040]" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#9BA8AB] animate-spin" />
      </div>
      {/* Texto */}
      <p className="text-[11px] tracking-[3px] uppercase text-[#4A5C6A]">
        Cargando
      </p>
    </div>
  );
};

export default Loading;
