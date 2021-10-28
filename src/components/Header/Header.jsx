import React from "react";
import { NavLink } from 'react-router-dom';
import logo1 from '../../img/logo1.png';
//import logo from '../../img/logo.png';
import "./Header.css";


const Header = () => {
    return (
        <div className="container">
            <div className="container-logo">
                <div className="logo-name">
                    <div className="logo">  <img
                        src={logo1}
                    /></div>
                    <div className="logo-text">
                        <h5>REACT PIZZA</h5>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div><NavLink to="/back" activeClassName="activeLink"> <img src={logo1} /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;