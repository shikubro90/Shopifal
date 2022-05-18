import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';

const Header = () => {

    const logo = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.citypng.com%2Fphoto%2F3047%2Fhigh-resolution-shopify-official-logo&psig=AOvVaw0jah_nFX8lkglucSR817vN&ust=1652989128157000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNiqtpjm6fcCFQAAAAAdAAAAABAJ"

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">logo</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;