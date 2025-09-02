import guias from "../data/guias.json";
import { useState } from "react";

export default function Guias() {
  const [filtro, setFiltro] = useState("");
  const filtradas = guias.filter(g =>
    g.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
    g.especialidad.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Guías y Protocolos Institucionales</h2>
      <input
        type="text"
        placeholder="Buscar por título o especialidad..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        className="border p-2 rounded w-full max-w-md mb-4"
      />
      <ul>
        {filtradas.map(g => (
          <li key={g.id} className="bg-white border shadow rounded p-4 mb-2">
            <h3 className="font-bold">{g.titulo}</h3>
            <p>Especialidad: {g.especialidad}</p>
            <a href={g.archivo} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
              Descargar PDF
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
