import { useState } from "react";

export default function Favoritos() {
  // Demo: lista simulada de favoritos
  const [favoritos, setFavoritos] = useState([
    { tipo: "Enfermedad", nombre: "Diabetes Mellitus" },
    { tipo: "Medicamento", nombre: "Metformina" },
    { tipo: "Calculadora", nombre: "IMC" }
  ]);

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Favoritos</h2>
      <ul>
        {favoritos.map((f, idx) => (
          <li key={idx} className="bg-white border shadow rounded p-4 mb-2">
            <span className="font-bold">{f.tipo}:</span> {f.nombre}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-gray-600">Funcionalidad ampliable para guardar cualquier recurso.</p>
    </section>
  );
}
