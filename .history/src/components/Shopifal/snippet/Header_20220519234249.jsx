import React from 'react';
import { Container, Nav, Navbar, NavDropdown,} from 'react-bootstrap';

const Header = () => {



    return (
        <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand style={{height : "50px", MaxWidth: "400px"}} href="#home"><img  style={{height: "100%", width: "100%", borderRadius: "20px"}} src='https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.jpg' /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#pricing">Shop Now</Nav.Link>
        <NavDropdown title="Category" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">T</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
            Dank memes
        </Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
};

export default Header;