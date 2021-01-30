import React from "react";
import "../HomeContent/Crousel.css";
import { Carousel } from "react-bootstrap";
export const Crousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src="pic1.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src="pic2.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src="pic3.jpg" alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
