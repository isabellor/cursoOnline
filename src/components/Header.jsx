import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-logo">LearnFlow</h1>
      </div>

      <div className="header-right">
        <span className="header-item">Perfil</span>
        <span className="header-item">Ajustes</span>
      </div>
    </header>
  );
}
