// src/pages/Dashboard.jsx
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { generateContent } from "../services/learnFlowApi";

export default function Dashboard() {
  const [courseContent, setCourseContent] = useState(null);

  // Por ahora, solo mostramos un botón para probar la API
  return (
    <>
      <h1>Dashboard</h1>
      <button
        onClick={async () => {
          const data = await generateContent({
            courseTitle: "Prueba Curso",
            courseDescription: "Curso de prueba",
            currentModule: "Módulo 1",
            moduleDescription: "Descripción del módulo 1",
            lesson: "Lección de prueba"
          });
          console.log(data);
          setCourseContent(data);
        }}
      >
        Probar API
      </button>

      {courseContent && (
        <pre style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>
          {JSON.stringify(courseContent, null, 2)}
        </pre>
      )}
    </>
  );
}
