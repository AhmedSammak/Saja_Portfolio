import { useReducer } from "react";
import { Link } from "react-router-dom";
import Rectangle from "./assest/Rectangle.png";
import Ellipse from "./assest/Ellipse.png";
import arrow from "./assest/arrow.png";
import linkedin from "./assest/linkedin.svg";
import whatsapp from "./assest/whatsapp.svg";
import instagram from "./assest/instagram.svg";
import twitter from "./assest/twitter.svg";
import email from "./assest/email.svg";
import zoom from "./assest/zoom.svg";
import madeBy from "./assest/madeBy.png";
import Gallery from "./assest/Gallery.png";

export default function HomePage() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 1:
        return 1;

      case 2:
        return 2;

      case 3:
        return 3;

      case 4:
        return 4;

      case 5:
        return 5;

      case 6:
        return 6;

      default:
        return state;
    }
  };
  const [iconValue, dispatch] = useReducer(reducer, initialState);
  console.log(iconValue);
  return (
    <div>
      <div className="home-content-st">
        <div className="home-head-content">
          <h1 className="head">Welcome to our digital design Gallery !</h1>
          <img src={Rectangle} alt="square" className="head-rec" />
          <img src={Ellipse} alt="Ellipse" className="head-ellips" />
        </div>
        <p className="home-parag-st">
          We are excited to share with you a diverse range of designs, including
          visual identities, digital graphics, product designs, and UX/UI work.
          This exhibition showcases the creativity and talent of our designers,
          and we hope it inspires you to think about the role that design plays
          in our daily lives. We hope you enjoy your visit and take away new
          ideas and insights into the world of digital design.
        </p>
        <p className="home-parag-nd">Thank you for joining us!</p>

        <img src={arrow} alt="arrow" className="home-arrow" />
        <Link to="/services" className="home-parag-rd">
          Services
        </Link>
      </div>
      <div className="home-content-nd">
        <h1 className="home-head-nd">Let's grab some coffee!</h1>
      </div>
      <div className="home-icons">
        <Link to="/Contact">
          <img
            src={linkedin}
            alt="linkedin"
            className="linkedinH ic"
            onClick={() => {
              dispatch(1);
            }}
          />
        </Link>
        <img src={Ellipse} alt="Ellipse" className="icon-ellipse-st ell" />
        <Link to="/contact">
          <img
            src={whatsapp}
            alt="whatsapp"
            className="whatsappH ic"
            onClick={() => {
              dispatch(2);
            }}
          />
        </Link>
        <Link to="/contact">
          <img
            src={zoom}
            alt="zoom"
            className="zoomH ic"
            onClick={() => {
              dispatch(3);
            }}
          />
        </Link>
        <Link to="/contact">
          <img
            src={instagram}
            alt="instagram"
            className="instagramH ic"
            onClick={() => {
              dispatch(4);
            }}
          />
        </Link>
        <img src={Ellipse} alt="Ellipse" className="icon-ellipse-nd ell" />
        <Link to="/contact">
          <img
            src={twitter}
            alt="twitter"
            className="twitterH ic"
            onClick={() => {
              dispatch(5);
            }}
          />
        </Link>
        <Link to="/contact">
          <img
            src={email}
            alt="email"
            className="emailH ic"
            onClick={() => {
              dispatch(6);
            }}
          />
        </Link>
      </div>
      <div className="home-content-rd">
        <p className="home-rd-parag-st">
          Thank you for visiting our website! We hope you had a pleasant
          experience and were able to find what you were looking for. It was a
          pleasure having you here and we hope to see you again soon. If you
          have any feedback or suggestions for us, please don't hesitate to
          reach out. Until next time,{" "}
        </p>
        <p className="home-rd-parag-nd">take care and have a great day!</p>
        <div className="made-by">
          <p className="made-parag">
            saja.Gallery 2023 ©
            <br /> Developed By | Ahmed El-Sammak
          </p>
          <div>
            <img src={madeBy} alt="madeBy" />
            <img src={Gallery} alt="Gallery" />
          </div>
        </div>
      </div>
    </div>
  );
}
