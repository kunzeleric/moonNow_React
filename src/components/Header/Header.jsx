import React from "react";
import "./index.scss";
import logo from "../../assets/imgs/logotipo.svg";

const Header = () => {
  return <>
    <nav className="header-page">
        <img src={logo} alt="Logo MoonNow" />
        <ul>
            <li>Quem somos</li>
            <li>Nosso propósito</li>
            <li>Suporte</li>
        </ul>
    </nav>
  </>;
};

export default Header;
