import React, { lazy } from 'react'
import "./CarouselPages.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../img1.png";
import img2 from "../img2.png";
import img3 from "../img3.png";
import img4 from "../img4.png";
import img5 from "../img5.png";

export default function CarouselPages() {
  return (
    <div className="carousel-wrapper">

     

      <Carousel >
        <Carousel.Item interval={3000}>
          <div className="maindiv">
            <div className="left-content">
              <h1>
                Learn from the future:<br />
                Explore our AI-powered<br />
                courses
              </h1>
   
            </div>
            <div className="right-content">
              <img src={img1} />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="maindiv">
            <div className="left-content">
              <h1>
                Learn from the future:<br />
                Explore our AI-powered<br />
                courses
              </h1>
    
            </div>
            <div className="right-content">
        <img src={img2} />         
     </div>
          </div>
        </Carousel.Item>

        
        <Carousel.Item interval={3000}>
          <div className="maindiv">
            <div className="left-content">
              <h1>
                Learn from the future:<br />
                Explore our AI-powered<br />
                courses
              </h1>
    
            </div>
            <div className="right-content">
        <img src={img3} />         
     </div>
          </div>
        </Carousel.Item>


        <Carousel.Item interval={3000}>
          <div className="maindiv">
            <div className="left-content">
              <h1>
                Learn from the future:<br />
                Explore our AI-powered<br />
                courses
              </h1>
    
            </div>
            <div className="right-content">
        <img src={img4} />         
     </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="maindiv">
            <div className="left-content">
              <h1>
                Learn from the future:<br />
                Explore our AI-powered<br />
                courses
              </h1>
    
            </div>
            <div className="right-content">
        <img src={img5} />         
     </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}