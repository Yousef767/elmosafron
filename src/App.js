import React, { Fragment } from "react";
import Nav from "./Components/Nav";
import "./scss/style.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Makka from "./Components/Makka";
import Footer from "./Components/Footer";
import Madina from "./Components/Madina";
import Offers from "./Components/Offers";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            index
            path="/"
            element={
              <Home/>
            }
          ></Route>
          <Route
            path="/makka"
            element={
              <Makka />
            }
          ></Route>
          <Route
            path="/madina"
            element={
              <Madina/>
            }
          ></Route>
          <Route
            path="/offers"
            element={
              <Offers/>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <a href="https://wa.me/+966544309335" className="whatsapp">
        <i className="fa-brands fa-whatsapp"></i>
        <div className="message">
          <span>تواصل معنا علي واتساب</span>
        </div>
      </a>
      <Footer/>
    </Fragment>
  );
}

export default App;
