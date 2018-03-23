import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import shamrockL from '../assets/images/shamrock-l.png';
import shamrockR from '../assets/images/shamrock-r.png';
import gold from '../assets/images/pot-o-gold.png';
import Signin from './sign_in';

const App = () => (
    <div>
        <div className="app">
            {/*<img src={gold} className="gold left" />*/}
            <img src={logo} className="logo rotate"/>
            {/*<div className="title-container">*/}
                {/*<img src={shamrockL} className="clover left rotate3d-right" />*/}
                {/*<img src={shamrockR} className="clover right rotate3d-left" />*/}
            {/*</div>*/}
            {/*<img src={gold} className="gold right"/>*/}
            <Signin/>
        </div>
    </div>
);

export default App;
