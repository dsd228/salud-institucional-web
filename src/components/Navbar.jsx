import { Link } from "react-router-dom";

const especialidades = [
  "Clínicos", "Neurólogos", "Infectólogos", "Pediatras", "Cirujanos", "Cardiólogos", "Enfermería"
];

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-4 py-2 flex flex-col md:flex-row items-center justify-between">
      <div className="font-bold text-xl">
        Salud Institucional
      </div>
      <div className="flex gap-2 flex-wrap mt-2 md:mt-0">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/directorio" className="hover:underline">Directorio</Link>
        <Link to="/enfermedades" className="hover:underline">Enfermedades</Link>
        <Link to="/medicamentos" className="hover:underline">Medicamentos</Link>
        <Link to="/calculadoras" className="hover:underline">Calculadoras</Link>
        <Link to="/resultados" className="hover:underline">Laboratorio</Link>
        <Link to="/novedades" className="hover:underline">Novedades</Link>
        <Link to="/guias" className="hover:underline">Guías</Link>
        <Link to="/panel" className="hover:underline">Panel</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}
