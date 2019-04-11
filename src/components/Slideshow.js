import React from 'react'
//import ReactSiema from 'react-siema'
//import ImageSlide from './ImageSlide.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//const Slide = (props) => <img {...props} alt="slide" />

const Slideshow = () => (
  <div className="content">
    <Carousel 
        showArrows={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        autoPlay={true} 
        swipeable={false}>
        <div>
            <img src="https://i.imgur.com/6IBCk6S.jpg" />
            <p className="">Legend 1</p>
        </div>
        <div>
            <img src="https://i.imgur.com/g0fw3mk.jpg" />
            <p className="">Legend 2</p>
        </div>
        <div>
            <img src="https://i.imgur.com/NsutVil.jpg" />
            <p className="">Legend 3</p>
        </div>
    </Carousel>
  </div>
)


export default Slideshow