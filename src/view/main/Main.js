import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from '../sample/Home';
import About from '../sample/About';
import ValidationTest from "../sample/ValidationTest";
import Ring from "../main/Ring";
import Necklace from "./Necklace";
import Bracelet from "./Bracelet";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav";
import MainContent from "./MainContent";

/**
 *  @component    App
 *  @param        none
 *  @description  최상위 컴포넌트
 */
const Main = () => {
    return (
        <>
            <div className="main-container">
                <div className="side-nav-container"><SideNav /></div>
                <div className="content-container"><MainContent /></div>

                {/*<Header/>*/}

                {/*<Route path="/" exact={true} component={Home}/>*/}
                {/*<Route path="/about" component={About}/>*/}
                {/*<Route path="/validation" component={ValidationTest}/>*/}
                {/*<Route path="/shop/ring" component={Ring}/>*/}
                {/*<Route path="/shop/necklace" component={Necklace}/>*/}
                {/*<Route path="/shop/bracelet" component={Bracelet}/>*/}
            </div>
        </>
    );
}

export default Main;
