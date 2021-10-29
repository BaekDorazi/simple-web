import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from '../sample/Home';
import About from '../sample/About';
import ValidationTest from "../sample/ValidationTest";

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
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/validation">Validation Test</Link>
                </li>
            </ul>

            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/validation" component={ValidationTest}/>
        </div>
    );
}

export default Main;
