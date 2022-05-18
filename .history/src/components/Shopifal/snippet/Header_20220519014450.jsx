import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';

const Header = () => {



    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src='https://www.citypng.com/public/uploads/preview/-11597191761n5ghafjnrt.png' className='img-fluid shadow-4' alt='...' /></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;