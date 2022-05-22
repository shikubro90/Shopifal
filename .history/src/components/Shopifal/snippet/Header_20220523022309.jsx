import React from 'react';
import { Container, Nav, Navbar, NavDropdown,} from 'react-bootstrap';

const Header = () => {

    return (
 <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand style={{height : "50px", MaxWidth: "400px"}} href="#home"><img  style={{height:"100%", width: "100%", borderRadius: "20px"}} src='https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.jpg' alt="alter" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/product">Shop Now</Nav.Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mobile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Laptop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Headphones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Accossories</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link to="/signup">Create Account</Nav.Link>
            <Nav.Link eventKey={2} to="/login">Login</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
};

export default Header;