import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><Image/></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;