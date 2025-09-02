import profesionales from "../data/profesionales.json";
import { useState } from "react";

export default function Directorio() {
  const [filtro, setFiltro] = useState("");
  const filtrados = profesionales.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    p.especialidad.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Directorio de Profesionales</h2>
      <input
        type="text"
        placeholder="Buscar por nombre o especialidad..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        className="border p-2 rounded w-full max-w-md mb-4"
      />
      <ul>
        {filtrados.map(p => (
          <li key={p.id} className="bg-white border shadow rounded p-4 mb-2">
            <h3 className="font-bold">{p.nombre}</h3>
            <p>Especialidad: {p.especialidad}</p>
            <p>Email: <a href={`mailto:${p.email}`} className="text-blue-700">{p.email}</a></p>
          </li>
        ))}
      </ul>
    </section>
  );
}
