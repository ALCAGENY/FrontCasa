import React, { useState } from "react";
import "./Habitaciones.css";

export function Cochera({FocoEndCochera}) {
 return (
    <>
      <section className="SeparacionCochera">
        <div className="Cochera">
          {FocoEndCochera && <div className="Foco2"></div>}
        </div>
      </section>
    </>
  );
}
