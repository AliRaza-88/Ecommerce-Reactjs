import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({image1, image2,image3, image4, image5}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <Slider {...settings}>
      <div className="divSlick">
        <img className="imgSlick" src={image1} alt="" />
      </div>
      <div className="divSlick">
        <img className="imgSlick" src={image2} alt="" />
      </div>
      <div className="divSlick">
        <img className="imgSlick" src={image3} alt="" />
      </div>
      <div className="divSlick">
        <img className="imgSlick" src={image4} alt="" />
      </div>
      <div className="divSlick">
        <img className="imgSlick" src={image5} alt="" />
      </div>
     
    </Slider>
  );
}