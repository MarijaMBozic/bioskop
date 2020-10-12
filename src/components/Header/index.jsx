import React from "react";
import { NavLink } from "react-router-dom"
import "./index.scss"

function Header(props) {
    return (
        <header>
            <div className="navLink-item" >
                <NavLink exact activeClassName="homePage-activ" to="/">Home Page</NavLink>
                <NavLink activeClassName="homePage-activ" to="/listaMovie">Repertoar</NavLink>
                <NavLink activeClassName="homePage-activ" to="/aboutUs">About Us</NavLink>
            </div>
        </header>
    )
}

export default Header;