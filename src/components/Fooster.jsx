export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white text-sm py-4 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <div>
          <span>© 2025 Entidad de Salud. Todos los derechos reservados.</span>
        </div>
        <div>
          <a href="mailto:contacto@salud.org" className="hover:underline mr-3">contacto@salud.org</a>
          <a href="https://twitter.com/salud" className="hover:underline mr-3">Twitter</a>
          <a href="https://facebook.com/salud" className="hover:underline">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
