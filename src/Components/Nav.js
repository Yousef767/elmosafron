import React from "react";
import SectionsNav from './SectionsNav'
const Nav = () => {
  return (
    <nav>
      <div className="box mainNav">
        <h1>المسافرون المتميزة</h1>
      </div>
      <div className="box2">
        <SectionsNav/>
      </div>
    </nav>
  );
};

export default Nav;
