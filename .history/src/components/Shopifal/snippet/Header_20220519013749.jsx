import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><Image src={https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AShopify_logo_2018.svg&psig=AOvVaw0jah_nFX8lkglucSR817vN&ust=1652989128157000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNiqtpjm6fcCFQAAAAAdAAAAABAD} /></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;