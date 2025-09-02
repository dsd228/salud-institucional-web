import enfermedades from "../data/enfermedades.json";
import { useState } from "react";

export default function Enfermedades() {
  const [busqueda, setBusqueda] = useState("");
  const filtradas = enfermedades.filter(e =>
    e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    e.tratamientos.some(t => t.toLowerCase().includes(busqueda.toLowerCase()))
  );

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Buscador de Enfermedades</h2>
      <input
        type="text"
        placeholder="Buscar enfermedad o tratamiento..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        className="border p-2 rounded w-full max-w-md mb-4"
      />
      <ul>
        {filtradas.map(e => (
          <li key={e.id} className="bg-white border shadow rounded p-4 mb-2">
            <h3 className="font-bold text-lg">{e.nombre}</h3>
            <p>{e.descripcion}</p>
            <p><strong>Diagnóstico:</strong> {e.diagnostico}</p>
            <p><strong>Tratamientos:</strong> {e.tratamientos.join(", ")}</p>
            <p><strong>Especialidades:</strong> {e.especialidades.join(", ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
