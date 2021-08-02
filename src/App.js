import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import ValidationTest from "./ValidationTest";

const App = () => {
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

export default App;
