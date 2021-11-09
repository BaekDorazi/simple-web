import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo_sample.png";

const Logo = () => {

    return (
        <div className="container">
            <Link to="/">
                <img src={logo} width="100px" height="100px"/>
            </Link>
        </div>
    );
}

export default Logo;