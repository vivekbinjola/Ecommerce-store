import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
        <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect >
        <Container>
        <LinkContainer to='/'>
        <Navbar.Brand className="px-5 py-2"  >Vivek's - Store</Navbar.Brand>

        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          
      <Nav className="justify-content-end">
      
      <LinkContainer to='/cart'>
            <Nav.Link >
            <i className="fas fa-shopping-cart px-1"></i>
          </Nav.Link>
            </LinkContainer>

        <LinkContainer to='/login'>
            <Nav.Link >
            <i className="fas fa-user px-1"></i>
          </Nav.Link>
            </LinkContainer>
            
          </Nav>
          </Navbar.Collapse> 
          </Container>
          </Navbar>
        </header>
    )
}

export default Header

