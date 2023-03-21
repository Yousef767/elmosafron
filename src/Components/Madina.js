import React from "react";
import temp from "../Media/temp.jpg";
import hotel from '../Media/hotel.jpg'
const Madina = () => {
  return (
    <div className="box flex">
      <div className="img">
        <img src={hotel} alt="" />
        <h1>فنادق المدينة المنورة</h1>
      </div>
      <div className="box offers p50">
        <div className="hotelInner">
          <div className="hotel">
            <img src={temp} alt="" />
            <div className="hotelDisc">
              <span>اسم الفندق</span>
              <span>المدينة المنورة</span>
              <span>نبذة عن الفندق نبذة عن الفندق نبذة عن الفندق</span>
            </div>
          </div>
          <div className="hotel">
            <img src={temp} alt="" />
            <div className="hotelDisc">
              <span>اسم الفندق</span>
              <span>المدينة المنورة</span>
              <span>نبذة عن الفندق نبذة عن الفندق نبذة عن الفندق</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Madina;
