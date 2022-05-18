import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';

const Header = () => {



    return (
        <div>
            <Navbar bg="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><img src='https://www.pngkit.com/png/detail/85-852411_based-out-of-ontario-canada-shopify-is-our.png' className='img-fluid shadow-4' alt='...' /></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;