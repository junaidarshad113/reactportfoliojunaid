import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.PNG";
import Ecommerce from "../../img/ecommerce.PNG";

import MusicApp from "../../img/musicapp.PNG";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href=" https://junaidarshad113.github.io/junaidportfolio/"><img src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href=" https://junaidarshad113.github.io/justice/"><img src={MusicApp} alt="" /></a>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
