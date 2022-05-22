import React from 'react';
import NavBar from '../../sections/NavBar';
import Slider_section from '../../sections/Slider_section';
import Product_section from '../../sections/Product_section';

const Home = () => {
    return (
        <div>
            <Slider_section/>
            <Product_section/>
        </div>
    );
};

export default Home;