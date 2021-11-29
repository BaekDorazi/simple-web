import React, {useCallback} from "react";
import {Route, Link} from 'react-router-dom';

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
                    <label htmlFor="menu01">
                        <Link to="/about" for="menu01">ABOUT</Link>
                    </label>

                    <input type="radio" name="accordion" id="menu02"/>
                    <label htmlFor="menu02">
                        <Link to="/shop/ring" for="menu02">SHOP</Link>
                    </label>
                    {/*하단 메뉴*/}
                    <div>
                        <div>
                            <Link to="/shop/ring">RING</Link>
                        </div>
                        <div>
                            <Link to="/shop/necklace">NECKLACE</Link>
                        </div>
                        <div>
                            <Link to="/shop/bracelet">BRACELET</Link>
                        </div>
                    </div>

                    <input type="radio" name="accordion" id="menu03"/>
                    <label htmlFor="menu03">
                        <Link to="/notice">NOTICE</Link>
                    </label>

                    <input type="radio" name="accordion" id="menu04"/>
                    <label htmlFor="menu04">
                        <Link to="/question">Q&A</Link>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default SideNav;