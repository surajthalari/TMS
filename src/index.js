import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"; 
import App from './app';

ReactDOM.render(<App style = {{resize : 'both', width : window.innerWidth, height : window.innerHeight}}/>, document.getElementById("root"));