export default function Panel() {
  return (
    <section className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>
      <div className="bg-white shadow rounded p-4">
        <p>Gestión de contenidos y usuarios (demo, módulo ampliable).</p>
        <ul className="list-disc ml-6">
          <li>Agregar/editar enfermedades</li>
          <li>Agregar/editar profesionales</li>
          <li>Publicar novedades</li>
          <li>Administrar guías y protocolos</li>
        </ul>
        <p className="mt-4 text-xs text-gray-600">Para funcionalidades avanzadas, implementar autenticación y gestión de permisos.</p>
      </div>
    </section>
  );
}
