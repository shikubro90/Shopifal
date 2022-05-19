import React from 'react';
import NavBar from '../../sections/NavBar';
import Slider_section from '../../sections/Slider_section';

const Home = () => {
    return (
        <div>
            <NavBar style={{position: 'sticky'}} />
            <Slider_section/>
        </div>
    );
};

export default Home;