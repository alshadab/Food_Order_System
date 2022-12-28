import React from 'react';
import { NavLink, Nav, Navbar  } from 'react-bootstrap';

const Navigate = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
    );
};

export default Navigate;