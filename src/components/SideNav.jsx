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

            <h1 className="logo">
                <Link to="/">BAEK</Link>
            </h1>

            <div className="menu-container">
                <div className="accordion">
                    <input type="radio" name="accordion" id="menu01"/>
                    <label for="menu01">ABOUT</label>

                    <input type="radio" name="accordion" id="menu02"/>
                    <label htmlFor="menu02">SHOP</label>
                    <div>
                        <div><Link to="/shop/ring">RING</Link></div>
                        <div><Link to="/shop/necklace">NECKLACE</Link></div>
                        <div><Link to="/shop/bracelet">BRACELET</Link></div>
                    </div>

                    <input type="radio" name="accordion" id="menu03"/>
                    <label htmlFor="menu03">NOTICE</label>

                    <input type="radio" name="accordion" id="menu04"/>
                    <label htmlFor="menu04">Q&A</label>
                </div>
            </div>
        </div>
    );
}

export default SideNav;