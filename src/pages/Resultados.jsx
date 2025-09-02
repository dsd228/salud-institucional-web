import { useState } from "react";

const rangos = {
  glucosa: { min: 70, max: 100, unidad: "mg/dl" },
  hemoglobina: { min: 12, max: 17, unidad: "g/dl" },
  creatinina: { min: 0.7, max: 1.3, unidad: "mg/dl" }
};

function interpretar(valor, rango) {
  if (valor < rango.min) return "Bajo";
  if (valor > rango.max) return "Alto";
  return "Normal";
}

export default function Resultados() {
  const [glucosa, setGlucosa] = useState("");
  const [hemoglobina, setHemoglobina] = useState("");
  const [creatinina, setCreatinina] = useState("");
  const [interpretacion, setInterpretacion] = useState(null);

  function calcular() {
    setInterpretacion({
      glucosa: interpretar(parseFloat(glucosa), rangos.glucosa),
      hemoglobina: interpretar(parseFloat(hemoglobina), rangos.hemoglobina),
      creatinina: interpretar(parseFloat(creatinina), rangos.creatinina)
    });
  }

  return (
    <section className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Interpretación de Análisis de Laboratorio</h2>
      <div className="mb-2">
        <label>Glucosa (mg/dl):</label>
        <input type="number" value={glucosa} onChange={e => setGlucosa(e.target.value)} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label>Hemoglobina (g/dl):</label>
        <input type="number" value={hemoglobina} onChange={e => setHemoglobina(e.target.value)} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label>Creatinina (mg/dl):</label>
        <input type="number" value={creatinina} onChange={e => setCreatinina(e.target.value)} className="border p-2 w-full" />
      </div>
      <button onClick={calcular} className="bg-blue-700 text-white px-4 py-2 rounded mt-2">Interpretar</button>
      {interpretacion && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Resultados:</h3>
          <ul>
            <li>Glucosa: {interpretacion.glucosa}</li>
            <li>Hemoglobina: {interpretacion.hemoglobina}</li>
            <li>Creatinina: {interpretacion.creatinina}</li>
          </ul>
        </div>
      )}
    </section>
  );
}
