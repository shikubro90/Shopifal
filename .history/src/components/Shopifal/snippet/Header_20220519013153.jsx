import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;