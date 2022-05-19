import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/Slider.style.css'

const Slider = () => {
    return (
        <div>
            <Carousel variant="dark" className='slider_wrapper'>
                <Carousel.Item className="height_width_full">
                    <img
                    className="d-block w-100 h-100"
                    src="https://img.freepik.com/free-vector/season-sale_62951-24.jpg?w=2000"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="height_width_full">
                    <img
                    className="d-block w-100"
                    src="https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1601/mikalaimanyshau160100083/50304057-bunte-einkaufen-vektor-flache-banner-f%C3%BCr-ihr-unternehmen-websites-etc-qualit%C3%A4t-design-illustrationen.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="height_width_full">
                    <img
                    className="d-block w-100"
                    src="https://previews.123rf.com/images/ylivdesign/ylivdesign1705/ylivdesign170502813/78258025-banner-de-compras-en-l%C3%ADnea-horizontal-estilo-de-dibujos-animados.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;