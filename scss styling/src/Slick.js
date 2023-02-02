import React from "react";
import Slider from "react-slick";

export default function Slick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="sld">
      <div className="sld-img" >
        <img src ="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg" alt = "img"/>
      </div>
      <div className="sld-img" >
      <img src =" https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__480.jpg" alt = "img"/>
        
      </div>
      <div   className="sld-img" >
      <img src ="https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954__480.jpg" alt = "img"/>
        
      </div>
      <div  className="sld-img" >
      <img src ="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__480.jpg" alt = "img"/>
        
      </div>
      <div  className="sld-img" >
      <img src ="https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512__480.jpg" alt = "img"/>
    
      </div>
      <div  className="sld-img" >
      <img src ="https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926__480.jpg" alt = "img"/>
        
      </div>
    </Slider>
  );
}