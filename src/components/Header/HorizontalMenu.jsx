import React from 'react';
import {Link} from "react-router-dom";

const HorizontalMenu = () => {
    return (
        <nav className="dropdownmenu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/shop/ring">Shop</Link>
                    <ul id="submenu">
                        <li><Link to="/shop/ring">Ring</Link></li>
                        <li><Link to="/shop/necklace">Necklace</Link></li>
                        <li><Link to="/shop/bracelet">Bracelet</Link></li>
                    </ul>
                </li>
                <li><Link to="/question">QnA</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default HorizontalMenu;