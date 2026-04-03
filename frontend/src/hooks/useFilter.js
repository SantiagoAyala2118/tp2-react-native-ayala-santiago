import { useState, useMemo } from "react";

const useFilter = (data) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return data;
    const q = query.toLowerCase();

    return data.filter(
      (car) =>
        car.marca.toLowerCase().includes(q) ||
        car.modelo.toLowerCase().includes(q),
    );
  }, [query, data]);

  return {
    query,
    setQuery,
    filtered,
  };
};

export default useFilter;
