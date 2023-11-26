import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home.js';
import Carros from './carros';
import Motos from './motos';
import QuemSomos from './quemsomos.js'
import logo from './Imagens/logocerto.png';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">
      <img
        alt="Logo"
        src={logo} // Substitua pelo caminho real do seu logo
        width="200"
        height="100"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarNav" />
    <Navbar.Collapse id="navbarNav" className="justify-content-center">
      <Nav className="mr-auto">
        <Nav.Link href="#home" className='h4 ml-5' onClick={() => navigateTo('home')}>
          Home
        </Nav.Link>
        <NavDropdown title="Serviços" id="basic-nav-dropdown">
          <NavDropdown.Item href="#carros" onClick={() => navigateTo('carros')}>
            Carros
          </NavDropdown.Item>
          <NavDropdown.Item href="#motos" onClick={() => navigateTo('motos')}>
            Motos
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#quemsomos" onClick={() => navigateTo('quemsomos')}>
          Quem Somos?
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'carros' && <Carros />}
        {currentPage === 'motos' && <Motos />}
        {currentPage === 'quemsomos' && <QuemSomos />}
      </main>

      <script src="./js/jquery-3.3.1.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/lightbox-plus-jquery.min.js"></script>
    </div>

    
  );
};

export default App;
