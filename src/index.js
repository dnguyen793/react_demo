import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(
    <App dimension = { { row: 3, col: 3 } } />,
    document.getElementById('root')
);
