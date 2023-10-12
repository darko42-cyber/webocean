import React, { useEffect, useState } from "react";
import Navbar from "./layout/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Instructor from "./pages/instructors/Instructor";
import WebDev from "./pages/webdev/WebDev";
import Certificate from "./pages/certificate/Certificate";
import MobileApp from "./pages/mobileapp/MobileApp";
import WebApp from "./pages/webapp/WebApp";
import OurApps from "./pages/ourapps/OurApps";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Footer from "./layout/footer/Footer";
import HTML from "./pages/webdev/html/HTML";
import CSSPAGE from "./pages/webdev/css/CSSPage";
import HTMLPage from "./pages/webdev/html/HTML";

const App = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    function start() {
      setScroll(true);
    }
    window.addEventListener("scroll", start);

    return () =>
      window.removeEventListener("scroll", start);
  }, []);
  useEffect(() => {
    function start() {
      setScroll(false);
    }
    window.addEventListener("scrollend", start);

    return () =>
      window.removeEventListener("scrollend", start);
  }, []);
  return (
    <Router>
      <Navbar scroll={scroll} />

      <Routes>
        <Route
          path='/'
          element={<Home scroll={scroll} />}
        />
        <Route
          path='/register'
          element={<Register scroll={scroll} />}
        />
        <Route
          path='/instructor'
          element={<Instructor />}
        />
        <Route path='/webDev' element={<WebDev />} />
        <Route
          path='/certificate'
          element={<Certificate />}
        />
        <Route path='/webapp' element={<WebApp />} />
        <Route path='/webdev/html' element={<HTMLPage />} />
        <Route path='/webdev/css' element={<CSSPAGE />} />
        <Route path='/mobileapp' element={<MobileApp />} />
        <Route path='/ourapps' element={<OurApps />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
