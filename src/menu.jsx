import { Link } from "react-router-dom";

import madeBy from "./assest/madeBy.png";
import Gallery from "./assest/Gallery.png";

function MenuItem({ message, classN }) {
  return <div className={classN}>{message}</div>;
}
export default function Menu() {
  return (
    <>
      <MenuItem classN="menu-item " message="Services" />
      <Link to="/services " className="linkTo">
        <MenuItem
          classN="menu-item pointer"
          message="Design a custom logo for your brand"
        />
      </Link>
      <Link to="/services" className="linkTo">
        <MenuItem
          classN="menu-item pointer"
          message="Create a professional profile for your business"
        />
      </Link>
      <Link to="/services" className="linkTo">
        <MenuItem
          classN="menu-item pointer"
          message="Build a stunning website for your company"
        />
      </Link>
      <Link to="/services" className="linkTo">
        <MenuItem
          classN="menu-item pointer"
          message="Design a unique product for your customers"
        />
      </Link>
      <Link to="/services" className="linkTo">
        <MenuItem
          classN="menu-item pointer"
          message="Get a personalized design solution for your business"
        />
      </Link>
      <Link to="/services" className="linkTo">
        <MenuItem
          classN="menu-item pointer"
          message="Request a quote for your design needs"
        />
      </Link>
      <Link to="/services" className="linkTo">
        <MenuItem classN="menu-item pointer" message="Something else" />
      </Link>

      <p className="menu-parag-st">
        Thank you for visiting our website! We hope you had a pleasant
        experience and were able to find what you were looking for. It was a
        pleasure having you here and we hope to see you again soon. If you have
        any feedback or suggestions for us, please don't hesitate to reach out.
        Until next time,
      </p>
      <p className="menu-parag-nd">take care and have a great day!</p>
      <div className="made-by">
        <p className="made-parag">
          saja.Gallery 2023 ©
          <br /> Developed By | Ahmed El-Sammak
        </p>
        <img src={madeBy} alt="madeBy" />
        <img src={Gallery} alt="Gallery" />
      </div>
    </>
  );
}
