import React from 'react';
import img from "../Media/temp.jpg";
import { NavLink } from "react-router-dom";

const Offers = () => {
  return (
    <div className="box offers p50">
        <h1>عروض</h1>
        <p>عروض ترويجية وخصومات وعروض خاصة لك</p>
        <div className="offersInner">
          <div className="offer">
            <img src={img} alt="" />
            <NavLink to={"/offers"} className="title">
              <h4>العطلة المثالية على طريقتك الخاصة</h4>
              <p>
                وفّر ما لا يقل عن 15% على الإقامات 
              </p>
            </NavLink>
          </div>
          <div className="offer">
            <img src={img} alt="" />
            <NavLink to={"/offers"} className="title">
              <h4>استمتع بعطلة طويلة</h4>
              <p>استمتع بالإقامة لمدة شهر أو أكثر مع المسافرون المتميزة</p>
            </NavLink>
          </div>
        </div>
      </div>
  );
}

export default Offers;
