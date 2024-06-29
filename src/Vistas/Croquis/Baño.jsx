import React from "react";
import "./Habitaciones.css";

export function Baño({ FocoEndBaño }) {
  return (
    <>
      <section className="SeparacionBaño">
        <div className="Baño">
          {FocoEndBaño && <div className="Foco1"></div>}
        </div>
      </section>
    </>
  );
}
