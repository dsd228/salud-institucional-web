import medicamentos from "../data/medicamentos.json";
import { useState } from "react";

export default function Medicamentos() {
  const [busqueda, setBusqueda] = useState("");
  const filtrados = medicamentos.filter(m =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    m.ficha_tecnica.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Buscador de Medicamentos</h2>
      <input
        type="text"
        placeholder="Buscar medicamento, dosis, interacción..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        className="border p-2 rounded w-full max-w-md mb-4"
      />
      <ul>
        {filtrados.map(m => (
          <li key={m.id} className="bg-white border shadow rounded p-4 mb-2">
            <h3 className="font-bold text-lg">{m.nombre}</h3>
            <p>Presentación: {m.presentacion}</p>
            <p><strong>Ficha técnica:</strong> {m.ficha_tecnica}</p>
            <p><strong>Interacciones:</strong> {m.interacciones.join(", ")}</p>
            <p><strong>Equivalentes:</strong> {m.equivalentes.join(", ") || "Ninguno"}</p>
            <p><strong>Precio estimado:</strong> ${m.precio}</p>
            <p><strong>Novedades:</strong> {m.novedades}</p>
            <p><strong>Estado:</strong> {m.aprobado ? "Aprobado" : "No aprobado"}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
