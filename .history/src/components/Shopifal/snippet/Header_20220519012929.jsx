import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            navbar
            <Navbar bg="dark" expand="lg"/>
            <Container>
                <Navbar.Brand href="#home">Bootstrap Navbar</Navbar.Brand>
            </Container>
        </div>
    );
};

export default Header;