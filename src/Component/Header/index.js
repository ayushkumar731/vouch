import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './styles.scss';

const Header = () => (
<Navbar expand="lg" bg="white" variant="dark" className="shadow-sm header">
      <Container>
        <Navbar.Brand href="/" className="navbar-branding">ATools</Navbar.Brand>
          <Nav className="d-none d-md-block">
            <Button className="free-trial-btn">Start Free Trial</Button>
            <Button className="login-btn">Login</Button>
          </Nav>
      </Container>
    </Navbar>
);

export default Header;