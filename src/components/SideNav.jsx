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
                    <input type="radio" name="accordion" id="answer01"/>
                    <label for="answer01">ABOUT</label>

                    <input type="radio" name="accordion" id="answer02"/>
                    <label htmlFor="answer02">SHOP</label>
                    <div>
                        <div>RING</div>
                        <div>NECKLACE</div>
                        <div>BRACELET</div>
                    </div>

                    <input type="radio" name="accordion" id="answer03"/>
                    <label htmlFor="answer03">NOTICE</label>

                    <input type="radio" name="accordion" id="answer04"/>
                    <label htmlFor="answer04">Q&A</label>
                </div>
            </div>
        </div>
    );
}

export default SideNav;