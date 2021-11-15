import React from "react";
import {Route, Link} from 'react-router-dom';
import Login from "../view/main/Login";

const SideNav = () => {
    return (
        <div className="side-nav-container">
            <div className="login-join-container">
                <Link to="/login" className="login">Login</Link>
                <div className="join">Join</div>
            </div>

            <h1 className="logo">BAEK</h1>

            <div className="menu-container">
                <div>menu1</div>
                <div>menu2</div>
                <div>menu3</div>
            </div>

            <Route path="/login" component={Login}/>
        </div>
    );
}

export default SideNav;