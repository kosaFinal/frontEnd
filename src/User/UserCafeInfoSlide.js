import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import "./UserCafeInfoSlide.css";

const UserCafeInfoSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [cafeInfoImages] = useState([
    "/assets/background_img.jpg",
    "/assets/manager_index_main3.png",
    "/assets/manager_index_main1.png",
    "/assets/manager_index_main2.png",
    "/assets/index_user_img1.png",
  ]);
  return (
    <usercafeinfoslide>
      <div className="user_cafe_info_slide">
        <Slider {...settings}>
          {cafeInfoImages.map((image, index) => (
            <div key={index} className="cafe-info-slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </usercafeinfoslide>
  );
};
const NextArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="cafe_info_next" type="button">
      <img src="/assets/right_arrow.png" />
    </button>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="cafe_info_prev" type="button">
      <img src="/assets/left_arrow.png" />
    </button>
  );
};
export default UserCafeInfoSlide;
