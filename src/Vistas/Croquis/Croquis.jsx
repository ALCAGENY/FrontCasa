import React, { useState } from "react";
import { Baño } from "./Baño";
import { Cocina } from "./Cocina";
import { Cuarto } from "./Cuarto";
import { Sala } from "./Sala";
import { Cochera } from "./Cochera";
import { Datos } from "./Datos";
import "./Croquis.css";

export function Croquis() {
  // FOCO BAÑO
  const [FocoEndBaño, setFocoEndBaño] = useState(true);
  const FocoPrendidoBaño = () => {
    setFocoEndBaño(!FocoEndBaño);
  };

  // FOCO COCINA
  const [FocoEndCocina, setFocoEndCocina] = useState(true);
  const FocoPrendidoCocina = () => {
    setFocoEndCocina(!FocoEndCocina);
  };

  // FOCO CUARTO
  const [FocoEndCuarto, setFocoEndCuarto] = useState(true);
  const FocoPrendidoCuarto = () => {
    setFocoEndCuarto(!FocoEndCuarto);
  };

  // FOCO SALA
  const [FocoEndSala, setFocoEndSala] = useState(true);
  const FocoPrendidoSala = () => {
    setFocoEndSala(!FocoEndSala);
  };

  // FOCO COCHERA
  const [FocoEndCochera, setFocoEndCochera] = useState(true);
  const FocoPrendidoCochera = () => {
    setFocoEndCochera(!FocoEndCochera);
  };

  // TODAS LAS FUNCIONES
  const funcionesFoco = {
    FocoPrendidoBaño,
    FocoPrendidoCocina,
    FocoPrendidoCuarto,
    FocoPrendidoSala,
    FocoPrendidoCochera
  };

  return (
    <>
      <div className="Papa">
        <div className="Papa1">
          <div className="A1">
            <Baño FocoEndBaño={FocoEndBaño} />
            <Cocina FocoEndCocina={FocoEndCocina} />
            <Cuarto FocoEndCuarto={FocoEndCuarto} />
          </div>
          <div className="A2">
            <Sala FocoEndSala={FocoEndSala} />
            <Cochera FocoEndCochera ={FocoEndCochera} />
            <Datos funcionesFoco={funcionesFoco} />
          </div>
        </div>
      </div>
    </>
  );
}
