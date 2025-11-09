export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        {/* SVG inline */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="4" width="56" height="56" rx="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M20 18 L20 46 L34 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M44 18 L30 18 M44 18 L44 46 M44 32 L34 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
      <nav className="sidebar__nav">
        <ul>
          <li className="active">Inicio</li>
          <li>Crear curso</li>
          <li>Mis módulos</li>
          <li>Historial</li>
        </ul>
      </nav>
    </aside>
  );
}
