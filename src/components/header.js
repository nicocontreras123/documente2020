import React, { Component } from "react";
import './../css/header.css';
import logo from './../img/logo.png'
import logout from './../img/logout.png'
import { Link, Redirect } from "react-router-dom";

class Header extends Component {
    render() {
      return (
          <div>
            <div class="topnav">
                <img src={logo} class="logo-imgh"></img>
                <h1 class="h1m header">DOCUMENTE
   
                <Link class="csesion" to="/">
                  <a class="csesion" href="">Cerrar Sesión <img src={logout} class="logoout-img"></img></a>
                </Link>
                </h1>
            </div>
          </div>
      );
    }
  }

  export default Header;
