import { useState } from "react";

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcularIMC() {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;
    if (!p || !a) {
      setResultado(null);
      return;
    }
    const imc = p / (a * a);
    setResultado(imc.toFixed(2));
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded">
      <h2 className="font-bold text-lg mb-4">Calculadora de IMC</h2>
      <div className="mb-2">
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={e => setPeso(e.target.value)} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={e => setAltura(e.target.value)} className="border p-2 w-full" />
      </div>
      <button onClick={calcularIMC} className="bg-blue-700 text-white px-4 py-2 rounded">Calcular</button>
      {resultado && <div className="mt-4">IMC: <strong>{resultado}</strong></div>}
    </div>
  );
}
