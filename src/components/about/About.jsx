import React from 'react'
import logo from "../../assets/logo.png";
import "./about.scss";

const About = () => {
    const visitInstagram = () => {
        window.location = "https://www.instagram.com/gabrielnahuel_/";
      };


  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h1 component="h1">Quienes somos</h1>

        <div>
          <div>
            <img
              className="img-about"
              src={logo}
              alt="Creador"
            />
            <h3>A•O•E Tienda de indumentaria</h3>
            <button className="button" onClick={visitInstagram} color="primary">
              Visita nuestro Instagram
            </button>
          </div>
          <div className="aboutSectionContainer2">
            <h2 component="h2">Somos un emprendimiento</h2>
             <span>Nos dedicamos a la venta de indumentaria, vendemos
                remeras, buzos y hacemos tambien stickers personalizados,
                trabajamos en colores negro, gris y blanco, estampamos y tambien
                hacemos sublimados.
                Llevamos ya 3 años de experiencia en el rubro de la ropa, nuestras
                prendas son 100% algodon peinado el mejor de todos, realizamos puntos
                de encuentro por zona oeste como Ramos Mejia, Moron, Haedo, Casanova,
                San justo y Castelar.
             </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About