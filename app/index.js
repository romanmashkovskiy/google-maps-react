import  React from 'react';
import ReactDOM from 'react-dom';
import App from './components/appview';

require('dotenv').config();

ReactDOM.render(
    <App />,
    document.getElementById("container")
);