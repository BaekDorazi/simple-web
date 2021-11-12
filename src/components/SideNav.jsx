import React from "react";

const SideNav = () => {

    return (
        <div className="side-nav-container">
            <div className="login-join-container">
                <div className="login">Login</div>
                <div className="join">Join</div>
            </div>

            <h1 className="logo">BAEK</h1>

            <div className="menu-container">
                <div>menu1</div>
                <div>menu2</div>
                <div>menu3</div>
            </div>
        </div>
    );
}

export default SideNav;