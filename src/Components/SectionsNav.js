import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { NavLink } from "react-router-dom";
const SectionsNav = () => {
  return (
    <Fragment>
      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 2,
          },
          500: {
            width: 500,
            slidesPerView: 3,
          },
          700: {
            width: 700,
            slidesPerView: 4,
          },
        }}
        className="swiper2"
      >
        <SwiperSlide className="sw">
          <li className="secs">
            <NavLink to={"/"}>
              <i class="fa-thin fa-house"></i>
              <span>الرئيسية</span>
            </NavLink>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="secs">
            <NavLink to={"/makka"}>
              <i class="fa-thin fa-bed"></i>
              <span>فنادق مكة</span>
            </NavLink>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="secs">
            <NavLink to={"/madina"}>
              <i class="fa-thin fa-bed"></i>
              <span>فنادق المدينة</span>
            </NavLink>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="secs">
            <NavLink to={"/offers"}>
            <i class="fa-thin fa-percent"></i>
              <span> العروض</span>
            </NavLink>
          </li>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
};

export default SectionsNav;
