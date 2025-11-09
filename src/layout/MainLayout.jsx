import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/layout.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout">
      <Header /> 
      <div className="layout__content">
        <Sidebar />
      
        <main className="layout__page">{children}</main>
      </div>
    </div>
  );
}
