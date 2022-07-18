import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const SliderComp = ({
  children,
  slidesToShow = 1,
  slidesToScroll = 1,
  dots = false,
  swipeToSlide = false,
  autoplay = false,
  responsive = [],
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    initialSlide: 0,
    autoplay: autoplay,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: responsive,
  };
  return (
    <div className="">
      <Slider {...settings} className="overflow-visible">
        {children}
      </Slider>
    </div>
  );
};

export default SliderComp;

// responsive: [
//   {
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       infinite: true,
//       dots: true,
//     },
//   },
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 2,
//       initialSlide: 2,
//     },
//   },
//   {
//     breakpoint: 480,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     },
//   },
// ],
