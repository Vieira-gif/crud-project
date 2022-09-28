import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../template/Logo';
import Nav from '../template/Nav';
import Routes from './Routes';
import Footer from '../template/Footer';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);
