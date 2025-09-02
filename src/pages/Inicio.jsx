import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Inicio() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function buscar() {
    navigate(`/enfermedades?busqueda=${encodeURIComponent(query)}`);
  }

  return (
    <section className="flex flex-col items-center justify-center h-[70vh]">
      <h1 className="text-3xl font-bold mb-6">Bienvenido a Salud Institucional</h1>
      <div className="w-full max-w-lg">
        <input
          type="text"
          placeholder="Buscar enfermedad, tratamiento, profesional..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border p-3 rounded w-full mb-2"
        />
        <button
          onClick={buscar}
          className="bg-blue-700 text-white px-4 py-2 rounded w-full"
        >
          Buscar
        </button>
      </div>
    </section>
  );
}
