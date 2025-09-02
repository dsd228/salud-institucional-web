import { useState } from "react";

export default function CalculadoraConversionUnidades() {
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("mg-g");
  const [resultado, setResultado] = useState(null);

  function convertir() {
    const v = parseFloat(valor);
    let res = null;
    switch (tipo) {
      case "mg-g":
        res = v / 1000;
        break;
      case "g-mg":
        res = v * 1000;
        break;
      case "kg-lb":
        res = v * 2.20462;
        break;
      case "lb-kg":
        res = v / 2.20462;
        break;
      default:
        res = null;
    }
    setResultado(res ? res.toFixed(2) : null);
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded my-4">
      <h2 className="font-bold text-lg mb-4">Conversión de Unidades</h2>
      <div className="mb-2">
        <label>Valor:</label>
        <input type="number" value={valor} onChange={e => setValor(e.target.value)} className="border p-2 w-full" />
      </div>
      <div className="mb-2">
        <label>Tipo de conversión:</label>
        <select value={tipo} onChange={e => setTipo(e.target.value)} className="border p-2 w-full">
          <option value="mg-g">mg → g</option>
          <option value="g-mg">g → mg</option>
          <option value="kg-lb">kg → lb</option>
          <option value="lb-kg">lb → kg</option>
        </select>
      </div>
      <button onClick={convertir} className="bg-blue-700 text-white px-4 py-2 rounded">Convertir</button>
      {resultado && <div className="mt-4">Resultado: <strong>{resultado}</strong></div>}
    </div>
  );
}
