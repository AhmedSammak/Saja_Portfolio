import React from "react";
import { Link } from "react-router-dom";
import CafePic from "../assest/cafe.png";
import Ellips from "../assest/Ellipse.png";
import Footer from "../footer";

const EmptyProjectPage = () => {
  return (
    <div>
      <Link to="/services">
        <span className="empty-span ">x</span>
        <img src={Ellips} alt="Ellips" className="empty-ellips" />
      </Link>
      <img src={CafePic} alt="Pic" className="empty-page-pic" />
      <div className="empty-page-heads">
        <h1 className="empty-page-head-st">There is nothing yet</h1>
        <h1 className="empty-page-head-nd">see you soon</h1>
      </div>
      <div className="footer-empty">
        <Footer />
      </div>
    </div>
  );
};

export default EmptyProjectPage;
