import routes from './config/routes';
import React from 'react'
import { render } from 'react-dom'
import Navbar from './components/Navbar'


render(
    routes,
    document.getElementById('app')
);
render(
    <Navbar/>,
    document.getElementById('navbar')
);

