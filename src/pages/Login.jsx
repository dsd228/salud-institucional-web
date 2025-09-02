import { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");

  function ingresar(e) {
    e.preventDefault();
    // Demo: usuario=medico clave=1234
    if (usuario === "medico" && clave === "1234") {
      setMensaje("Ingreso exitoso.");
      // Aquí podrías guardar el estado de login o redirigir
    } else {
      setMensaje("Usuario o clave incorrectos.");
    }
  }

  return (
    <section className="flex flex-col items-center justify-center h-[60vh]">
      <form onSubmit={ingresar} className="bg-white shadow p-6 rounded w-full max-w-sm">
        <h2 className="font-bold text-lg mb-4">Ingreso al sistema</h2>
        <div className="mb-2">
          <label>Usuario:</label>
          <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} className="border p-2 w-full" />
        </div>
        <div className="mb-2">
          <label>Clave:</label>
          <input type="password" value={clave} onChange={e => setClave(e.target.value)} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded w-full">Ingresar</button>
        {mensaje && <div className="mt-4 text-center">{mensaje}</div>}
      </form>
    </section>
  );
}
