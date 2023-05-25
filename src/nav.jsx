import { Link, Route, Routes } from "react-router-dom";
import logo from "./assest/logo.png";
import heart from "./assest/heart.png";
import menu from "./assest/menu.png";
import HomePage from "./home-page.jsx";
import About from "./about";
import Contact from "./contact";
import Menu from "./menu";
import LovePage from "./love-page";
import Cafe from "./cafe";
import Services from "./services";

export default function Navbar() {
  return (
    <div>
      <div className="nav-bar">
        <Link to="/">
          <img src={logo} alt="LOGO" />
        </Link>
        <Link to="/about" className="nav-element">
          ABOUT
        </Link>
        <Link to="/contact" className="nav-element">
          CONTACT
        </Link>
        <Link to="/cafe" className="nav-element">
          CAFE`
        </Link>
        <Link to="/love-page">
          <img src={heart} alt="LOGO" />
        </Link>
        <Link to="/menu">
          <img src={menu} alt="LOGO" />
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cafe" element={<Cafe />} />
        <Route path="/Love-Page" element={<LovePage />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}
