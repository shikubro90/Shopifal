import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><Image src={https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png} /></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;