import React from "react";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Payment from "../../assets/payments.png";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">Acerca de nosotros</div>
          <div className="text">
            Somos un emprendimiento, dedicado a hacer estampados, tanto en tela
            negra y blanca, como diferentes tipo y colores. Nos especializamos
            en remeras, buzos y stickers...
          </div>
        </div>
        <div className="col">
          <div className="title">Contacto</div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Teléfono: 1123359620</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: aoetiendavirtual@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categorías</div>
          <Link to="/products/remeras%20negras">
          <span className="text">Remeras Negras</span>
          </Link>
          <Link to="/products/remeras%20blancas">
          <span className="text">Remeras Blancas</span>
          </Link>
          <Link to="/products/buzos%20negros">
          <span className="text">Buzos Negros</span>
          </Link>
          <Link to="/products/buzos%20blancos">
          <span className="text">Buzos Blancos</span>
          </Link>
          <Link to="/products/stickers">
          <span className="text">Stikers</span>
          </Link>
        </div>
        <div className="col">
          <div className="title">Paginas</div>
          <span className="text">Home</span>
          <span className="text">Nosotros</span>
          <span className="text">Política de privacidad</span>
          <span className="text">Términos y condiciones</span>
          <span className="text">Contáctenos</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            AOE-TIENDA 2022 CREADO POR NAHUEL CERNADAS. SOLUCIONES PREMIUM DE
            COMERCIO ELECTRÓNICO.
          </span>
          <img src={Payment} alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
