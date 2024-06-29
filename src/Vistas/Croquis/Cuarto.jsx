import React, { useState } from "react";
import "./Habitaciones.css";

export function Cuarto({FocoEndCuarto}) {

  return (
    <>
      <section className="SeparacionCuarto">
        <div className="Cuarto">
          {FocoEndCuarto && <div className="Foco4"></div>}
        </div>
      </section>
    </>
  );
}
