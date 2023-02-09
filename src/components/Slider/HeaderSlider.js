import React from 'react';
import "./HeaderSlider.scss";
import { sliderImgs } from "../../utils/images";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { version } from 'react-dom';

const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 50,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='slider'>
      <div className='container'>
        <div className='slider-content overflow-x-hidden'>
          <Slider {...settings}>
            <div className='slider-item'>
              <img src = {sliderImgs[0]} alt = "first" />
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs[1]} alt = "second" />
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs[2]} alt = "third" />
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs[3]} alt = "fourth" />
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs[4]} alt = "five" />
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs[5]} alt = "six" />
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs[6]} alt = "seven" />
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs[7]} alt = "eight" />
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs[8]} alt = "nine" />
            </div>
          
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider