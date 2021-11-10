import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo_sample.png";

const Logo = () => {

    return (
        <span className="logo-container">
            <Link to="/">
                <img className="logo" src={logo} width="70px" height="70px"/>
            </Link>
        </span>
    );
}

export default Logo;