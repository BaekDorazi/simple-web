
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/view/sample/About.js';
reactComponents['About'] = Component0;

import Component1 from '../src/view/main/Main.js';
reactComponents['App'] = Component1;

import Component2 from '../src/view/sample/Home.js';
reactComponents['Home'] = Component2;

import Component3 from '../src/view/sample/ValidationTest.js';
reactComponents['ValidationTest'] = Component3;