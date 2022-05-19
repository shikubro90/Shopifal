import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/Slider.style.css'

const Slider = () => {
    return (
        <div className="">
            <Carousel variant="dark" className="">
                <Carousel.Item className="">
                    <img
                    className="w-100 "
                    src="https://img.freepik.com/free-vector/online-shopping-horizontal-banner-illustration_1284-57252.jpg?w=2000"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="">
                    <img
                    className="w-100 "
                    src="https://img.freepik.com/free-vector/online-shopping-horizontal-banner-illustration_1284-57252.jpg?w=2000"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;