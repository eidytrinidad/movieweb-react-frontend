import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    
    const [value, setValue] = useState(true)
    const btnBurgerClick = () => {
      setValue(!value)
    };

  return (
    <header>
      <div 
      style={value ? {display:'none'} : {display:'flex'}}
      className="animate__animated animate__fadeInDown burgerMenu">
        <Link to="/home" >INICIO</Link>
        <a href="">NOSOTROS</a>
        <i className="fas fa-ticket-alt"></i>
      </div>

      <nav className="menu">
        <button className="btnBurger" onClick={btnBurgerClick}>
          <i className={value ? "fas fa-bars" : "fas fa-times"}></i>
        </button>
      </nav>

      <article className="busqueda">
            <button className="btnSearch">
                <i className="fas fa-search"></i>
            </button>
            <Link to="/admin/agregar" className="btnAgregar">
                <i className="fas fa-plus"></i>
            </Link>
        </article>
    </header>
  );
};


