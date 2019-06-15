import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
require('es6-promise').polyfill();
require('../scss/app.scss');

ReactDOM.render(<Routes/>, document.getElementById('root'));



