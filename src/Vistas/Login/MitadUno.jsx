import React from "react";
import "./Diviciones.css";
import Facebook from "../../assets/Img/Facebook.png";
import Instagram from "../../assets/Img/Instagram.png";
import Youtube from "../../assets/Img/Youtube.png";
import X from "../../assets/Img/X.png";

export function MitadUno() {
    return (
        <section className="Mitad-1">
            <div className="Titulo">
                <h1 className="Titulo">HOME SECURITY</h1>
            </div>
            <article>
                <p className="Parrafo">Seguridad para ti y tu familia.</p>
            </article>

            <article>
                <p className="Parrafos">Enciende y apaga tus dispositivos electrónicos desde cualquier lugar del mundo con solo un toque en tu teléfono.</p>                
            </article>

            <article>
                <p className="Parrafos">Ten un monitoreo adecuado de quienes entran y están en tu casa.</p>
            </article>

            <footer className="Barra">
             <a className="Estados" href="https://www.facebook.com/?locale=es_LA"><img className="Icono" src={Facebook} alt="Facebook" /></a>
                        
             <a className="Estados" href="https://x.com/?lang=es"><img className="Icono" src={X} alt="X" /></a>

             <a className="Estados" href="https://www.instagram.com/"><img className="Icono" src={Instagram} alt="Instagram" /></a>
            
            <a className="Estados" href="https://www.youtube.com/"><img className="Icono" src={Youtube} alt="Youtube" /></a>
            </footer>
        </section>
    );
}
