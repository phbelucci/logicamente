import React from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import { Container } from './styles';

const NavegationBar: React.FC = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Logicamente</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ranking">Ranking</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fase 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fase 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fase 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default NavegationBar;