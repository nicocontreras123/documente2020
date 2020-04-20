import React, { Component } from "react";
import './../css/left-menu.css';
import nube from './../img/nube.png'
import doc from './../img/doc.png'


class Header extends Component {
    render() {
      return (
        <div class='menu'>
            <a class="list"><img src={nube} class="icon-menu"></img>Cargar Archivo</a>
            <a class="list"><img src={doc} class="icon-menu"></img>Documentos</a>

      </div>
      );
    }
  }

  export default Header;