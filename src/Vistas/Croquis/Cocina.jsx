import React from "react";
import "./Habitaciones.css";

export function Cocina({ FocoEndCocina }) {
  return (
    <>
      <section className="SeparacionCocina">
        <div className="Cocina">
          {FocoEndCocina && <div className="Foco3"></div>}
        </div>
      </section>
    </>
  );
}
