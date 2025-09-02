import CalculadoraIMC from "../components/CalculadoraIMC";
import CalculadoraGFR from "../components/CalculadoraGFR";
import CalculadoraDosisPediatrica from "../components/CalculadoraDosisPediatrica";
import CalculadoraRiesgoCardiovascular from "../components/CalculadoraRiesgoCardiovascular";
import CalculadoraConversionUnidades from "../components/CalculadoraConversionUnidades";

export default function Calculadoras() {
  return (
    <section className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Calculadoras Médicas</h2>
      <CalculadoraIMC />
      <CalculadoraGFR />
      <CalculadoraDosisPediatrica />
      <CalculadoraRiesgoCardiovascular />
      <CalculadoraConversionUnidades />
    </section>
  );
}
