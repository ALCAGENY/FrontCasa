import React, { useState } from "react";
import "./Habitaciones.css";

export function Sala({FocoEndSala}) {
  return (
    <>
      <section className="SeparacionSala">
        <div className="Sala">
          {FocoEndSala && <div className="Foco2"></div>}
        </div>
      </section>
    </>
  );
}
