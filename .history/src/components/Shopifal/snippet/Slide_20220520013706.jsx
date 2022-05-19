import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/Slider.style.css'

const Slider = () => {
    return (
        <div className="height_width_full">
            <Carousel variant="dark" >
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
            </Carousel>
        </div>
    );
};

export default Slider;