import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Diviciones.css";

export function MitadDos() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:3030/api/v1/auth/login";
    const data = { email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Login exitoso:", responseData);
        navigate('/Croquis'); // Redirige a la página Croquis
      } else {
        console.error("Error al iniciar sesión:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <section className="Mitad-2">
      <header className="Titulo2">
        <h1>SIGN IN</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="Parrafos">Correo Electrónico:</p>
          <input
            className="Entradas"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          <p className="Parrafos">Contraseña:</p>
          <input
            className="Entradas"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="Boton">
          LOGIN
        </button>
      </form>
    </section>
  );
}
