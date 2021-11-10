import React from "react";
import Logo from "./Logo";
import HorizontalMenu from "./HorizontalMenu";

const Header = () => {

    return (
        <div className="header-container">
            <Logo/>
            <HorizontalMenu/>
        </div>
    );
}

export default Header;