import React from "react";
import img from "../Media/temp.jpg";
import { NavLink } from "react-router-dom";
import makka from '../Media/makka.jpg'
import madina from '../Media/madina.jpg'
const Home = () => {
  return (
    <div className="section">
      <div className="blue">
        <div className="box card">
          <h1>ابحث عن إقامتك التالية</h1>
          <h3>استكشف العروض على الفنادق والبيوت وغيرها الكثير...</h3>
        </div>
      </div>
      <div className="box offers">
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
      <div className="box offers">
        <h1>الفنادق</h1>
        <div className="offersInner">
          <div className="offer">
            <img src={makka} alt="" />
            <NavLink to={"/makka"} className="title">
              <h3>فنادق مكة</h3>
            </NavLink>
          </div>
          <div className="offer">
            <img src={madina} alt="" />
            <NavLink to={"/madina"} className="title">
              <h3>فنادق المدينة</h3>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
