import React from "react";
import { MitadUno } from "./MitadUno";
import { MitadDos } from "./MitadDos";
import "./Login.css";

export function Login() {
  return (
    <main className="CuerpoP">
      <div className="Transparencia">
        <section className="Cuadrado">
          <div className="Separacion">
            <MitadUno />
            <MitadDos />
          </div>
        </section>
      </div>
    </main>
  );
}
