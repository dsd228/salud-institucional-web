import novedades from "../data/novedades.json";
import { useState } from "react";

export default function Novedades() {
  const [filtro, setFiltro] = useState("");
  const filtradas = novedades.filter(n =>
    n.especialidad.toLowerCase().includes(filtro.toLowerCase()) ||
    n.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
    n.contenido.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Novedades y Técnicas Nuevas</h2>
      <input
        type="text"
        placeholder="Buscar por especialidad, título..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        className="border p-2 rounded w-full max-w-md mb-4"
      />
      <ul>
        {filtradas.map(n => (
          <li key={n.id} className="bg-white border shadow rounded p-4 mb-2">
            <h3 className="font-bold">{n.titulo}</h3>
            <p>Especialidad: {n.especialidad}</p>
            <p>{n.contenido}</p>
            <p className="text-xs text-gray-600">{n.fecha}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
