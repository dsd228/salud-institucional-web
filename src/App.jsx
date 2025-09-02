import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Directorio from "./pages/Directorio";
import Enfermedades from "./pages/Enfermedades";
import Medicamentos from "./pages/Medicamentos";
import Calculadoras from "./pages/Calculadoras";
import Resultados from "./pages/Resultados";
import Novedades from "./pages/Novedades";
import Guias from "./pages/Guias";
import Login from "./pages/Login";
import Panel from "./pages/Panel";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/directorio" element={<Directorio />} />
          <Route path="/enfermedades" element={<Enfermedades />} />
          <Route path="/medicamentos" element={<Medicamentos />} />
          <Route path="/calculadoras" element={<Calculadoras />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/guias" element={<Guias />} />
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
