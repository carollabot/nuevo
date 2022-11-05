import React from "react";
import "./Header.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <header className="header">
        <ul>
          <li>
            <Link className="link" to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link className="link" to="/categoria/High">Categoria High</Link>
          </li>
          <li>
            <Link className="link" to="/categoria/Low">Categoria Low</Link>
          </li>
        </ul>
        <Link to="/inicio" className="logo"><img className="logo" src="https://1000marcas.net/wp-content/uploads/2021/06/Foot-Shop-logo.png" alt="Logo"/></Link>
        <CartWidget/>
      </header>
    );
  }

  export default NavBar;