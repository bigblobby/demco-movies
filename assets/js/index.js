import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
require('es6-promise').polyfill();
require('../scss/app.scss');

ReactDOM.render(<Router/>, document.getElementById('root'));



