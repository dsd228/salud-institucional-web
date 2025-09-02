import { useState } from "react";

export default function CalculadoraGFR() {
  const [edad, setEdad] = useState("");
  const [creatinina, setCreatinina] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [resultado, setResultado] = useState(null);

  function calcularGFR() {
    const e = parseInt(edad);
    const c = parseFloat(creatinina);
    if (!e || !c) {
      setResultado(null);
      return;
    }
    // Fórmula MDRD simplificada (para adultos)
    let gfr = 175 * Math.pow(c, -1.154) * Math.pow(e, -0.203);
    if (sexo === "femenino") gfr *= 0.742;
    setResultado(gfr.toFixed(1));
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded my-4">
      <h2 className="font-bold text-lg mb-4">Calculadora de Filtración Glomerular (GFR)</h2>
      <div className="mb-2">
        <label>Edad (años):</label>
        <input type="number" value={edad} onChange={e => setEdad(e.target.value)} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label>Creatinina (mg/dl):</label>
        <input type="number" step="0.01" value={creatinina} onChange={e => setCreatinina(e.target.value)} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label>Sexo:</label>
        <select value={sexo} onChange={e => setSexo(e.target.value)} className="border p-2 w-full">
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>
      <button onClick={calcularGFR} className="bg-blue-700 text-white px-4 py-2 rounded">Calcular</button>
      {resultado && <div className="mt-4">GFR estimado: <strong>{resultado} ml/min/1.73m²</strong></div>}
    </div>
  );
}
