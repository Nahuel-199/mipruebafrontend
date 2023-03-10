import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import "./header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>Nosotros</li>
            <li onClick={() => navigate("/products")}>Productos</li>
          </ul>

          <div className="center" onClick={() => navigate("/")}>
            AOE-TIENDA.
          </div>
          <div className="right">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/aoe_indumentaria"
            >
              <BsInstagram style={{ color: "white" }} />
            </a>
            <span className="right__span">
              https://www.instagram.com/aoe_indumentaria
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
