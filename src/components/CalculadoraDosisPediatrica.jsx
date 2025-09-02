import { useState } from "react";

export default function CalculadoraDosisPediatrica() {
  const [peso, setPeso] = useState("");
  const [dosisMgKg, setDosisMgKg] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcularDosis() {
    const p = parseFloat(peso);
    const d = parseFloat(dosisMgKg);
    if (!p || !d) {
      setResultado(null);
      return;
    }
    const dosisTotal = p * d;
    setResultado(dosisTotal.toFixed(2));
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded my-4">
      <h2 className="font-bold text-lg mb-4">Calculadora de Dosis Pediátrica</h2>
      <div className="mb-2">
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={e => setPeso(e.target.value)} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label>Dosis recomendada (mg/kg):</label>
        <input type="number" value={dosisMgKg} onChange={e => setDosisMgKg(e.target.value)} className="border p-2 w-full" />
      </div>
      <button onClick={calcularDosis} className="bg-blue-700 text-white px-4 py-2 rounded">Calcular</button>
      {resultado && <div className="mt-4">Dosis total: <strong>{resultado} mg</strong></div>}
    </div>
  );
}
