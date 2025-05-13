import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import { cover1, black, cover3, yoga1 } from "../../assets/index.js";

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={cover1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={black} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={yoga1} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
