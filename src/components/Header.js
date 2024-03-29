import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>      
    <Navbar bg="dark" variant="dark" >
      <Container fluid>
        <LinkContainer to="/">
        <Navbar.Brand >Code Support</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "           
            style={{ maxHeight: '100px'}}
            navbarScroll
            
          >            
            <LinkContainer to='/'>
            <Nav.Link href="/"><i className='fas fa-home'></i> Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
            <Nav.Link >About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/service'>
            <Nav.Link >Service Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
            <Nav.Link href="/"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link href="/"><i className='fas fa-user'></i> Login</Nav.Link>
            </LinkContainer>
            
          </Nav>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  

         </div>
  )
}
