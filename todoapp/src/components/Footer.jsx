import React from "react";
import "../css/footer.css";

export default function Footer({ completed, totalTodos }) {
  return (
    <div className="footer">
      <span className="item">Completed Todos ✅ {completed}</span>
      <span className="item">Total Todos 🟰 {totalTodos}</span>
    </div>
  );
}
