import React from 'react';
// import { Container, Navbar, NavbarBrand } from 'reactstrap';
// import NucampLogo from './app/assets/img/logo.png';
// import logo from './logo.svg';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';
import CampsitesList from './features/campsites/CampsitesList.js';
import { CAMPSITES } from './app/shared/CAMPSITES';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
    </div>
  );
}

export default App;
