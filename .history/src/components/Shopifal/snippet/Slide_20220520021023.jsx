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
                    src=https://frameru.com/wp-content/uploads/2021/06/Online-shopping-concept-banner-template.jpg"
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
                    src="https://img.freepik.com/free-vector/big-sale-promotion-horizontal-banner-with-three-characters-holding-shopping-bag-box_1284-63126.jpg?w=2000"
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
                    src="https://img.freepik.com/free-vector/big-sale-promotion-horizontal-banner-with-three-characters-holding-shopping-bag-box_1284-63126.jpg?w=2000"
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