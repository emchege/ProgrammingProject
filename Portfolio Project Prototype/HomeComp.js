import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from 'infinite-react-carousel';
import Image1 from '../imgs/5128389.jpg';
import Image2 from '../imgs/5139006.jpg';
import Image3 from '../imgs/designs-10.jpg';

function Home(props) {
    return (
        
            <div
                className="App"
                style={{ width: "600px", margin: "auto", padding: "50px" }}
            >
                <Carousel arrows infinite className="App" interval={100}>
                    <img src={Image1} />
                    <img src={Image2} />
                    <img src={Image3} />
                </Carousel>
            </div>

           
    
    );
}

export default Home;