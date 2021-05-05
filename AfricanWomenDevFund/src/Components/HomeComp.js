import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from 'infinite-react-carousel';
import Image1 from '../imgs/5128389.jpg';
import Image2 from '../imgs/5139006.jpg';
import Image3 from '../imgs/designs-10.jpg';

function Home(props) {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (

        <div
            className="App"
            style={{ width: "600px", margin: "auto", padding: "50px" }}
        >
            <h1 className = "header">Welcome to our Website</h1>
            <h3 className = "subhead">click on the tabs above to see more!</h3>
            <Slider className="App"{...settings}>
                <img src={Image1} />
                <img src={Image2} />
                <img src={Image3} />
            </Slider>

        </div>
    );
}
export default Home;