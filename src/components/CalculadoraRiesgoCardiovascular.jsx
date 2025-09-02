import { useState } from "react";

export default function CalculadoraRiesgoCardiovascular() {
  const [edad, setEdad] = useState("");
  const [fumador, setFumador] = useState(false);
  const [presion, setPresion] = useState("");
  const [colesterol, setColesterol] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcularRiesgo() {
    // Simplificado: solo para demo
    const e = parseInt(edad);
    const p = parseInt(presion);
    const c = parseInt(colesterol);
    let score = 0;
    if (e > 50) score += 2;
    if (fumador) score += 2;
    if (p > 140) score += 2;
    if (c > 200) score += 2;
    let riesgo = "Bajo";
    if (score >= 4) riesgo = "Alto";
    else if (score >= 2) riesgo = "Moderado";
    setResultado(riesgo);
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded my-4">
      <h2 className="font-bold text-lg mb-4">Score de Riesgo Cardiovascular</h2>
      <div className="mb-2">
        <label>Edad (años):</label>
        <input type="number" value={edad} onChange={e => setEdad(e.target.value)} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label>¿Fumador?</label>
        <input type="checkbox" checked={fumador} onChange={e => setFumador(e.target.checked)} className="ml-2" />
      </div>
      <div className="mb-2">
        <label>Presión sistólica (mmHg):</label>
        <input type="number" value={presion} onChange={e => setPresion(e.target.value)} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label>Colesterol total (mg/dl):</label>
        <input type="number" value={colesterol} onChange={e => setColesterol(e.target.value)} className="border p-2 w-full" />
      </div>
      <button onClick={calcularRiesgo} className="bg-blue-700 text-white px-4 py-2 rounded">Calcular</button>
      {resultado && <div className="mt-4">Riesgo: <strong>{resultado}</strong></div>}
    </div>
  );
}
