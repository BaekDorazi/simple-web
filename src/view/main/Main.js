import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from '../sample/Home';
import About from '../sample/About';
import ValidationTest from "../sample/ValidationTest";
import Ring from "../main/Ring";
import Necklace from "./Necklace";
import Bracelet from "./Bracelet";

/**
 *  @summary  최상위 컴포넌트
 *  @author   백도형
 *  @version  1.0, 작업 내용
 *  @see      None
 */

/**
 *  @component    App
 *  @param        none
 *  @description  최상위 컴포넌트
 */
const Main = () => {
    return (
        <div>
            <div>
                <Link to="/"><img src={"logo192.png"}/></Link>
            </div>
            <ul id="main">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/shop/ring">Shop</Link>
                    <ul className="drop">
                        <div>
                            <li><Link to="/shop/ring">Ring</Link></li>
                            <li><Link to="/shop/necklace">Necklace</Link></li>
                            <li><Link to="/shop/bracelet">Bracelet</Link></li>
                        </div>
                    </ul>
                </li>
                <li>
                    <Link to="/question">QnA</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/validation" component={ValidationTest}/>
            <Route path="/shop/ring" component={Ring}/>
            <Route path="/shop/necklace" component={Necklace}/>
            <Route path="/shop/bracelet" component={Bracelet}/>
        </div>
    );
}

export default Main;
