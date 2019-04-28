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
            <img 
              src="/images/01.jpg"
              alt="Sawasdee-pic"
            />
        </div>
        <div>
            <img 
              src="/images/04.jpg"
              alt="Sawasdee-pic"
            />
        </div>
        <div>
            <img 
              src="/images/02.jpg"
              alt="Sawasdee-pic"
            />
        </div>
        <div>
            <img 
              src="/images/05.jpg"
              alt="Sawasdee-pic"
            />
        </div>
        <div>
            <img 
              src="/images/06.jpg"
              alt="Sawasdee-pic"
            />
        </div>
    </Carousel>
  </div>
)


export default Slideshow