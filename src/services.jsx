import { Link } from "react-router-dom";
import Ellipse from "./assest/Ellipse.png";
import linkedin from "./assest/linkedin.svg";
import whatsapp from "./assest/whatsapp.svg";
import instagram from "./assest/instagram.svg";
import twitter from "./assest/twitter.svg";
import email from "./assest/email.svg";
import zoom from "./assest/zoom.svg";
import madeBy from "./assest/madeBy.png";
import Gallery from "./assest/Gallery.png";
import RectangleNd from "./assest/RectangleNd.png";
import arrowNd from "./assest/arrowNd.png";
export default function Services() {
  function handleClick() {
    console.log("Icon is clicked");
  }
  return (
    <>
      <div className="services-content">
        <div className="services-content-st">
          <div className="services">
            <img src={arrowNd} alt="ARROW" className="services-arrow" />
            <h1 className="services-head-one">SERVICES</h1>
            <img
              src={RectangleNd}
              alt="rectangular"
              className="services-rectangular"
            />
          </div>
          <Link to="/BrandingProjects" className="linkTo">
            <div className="branding">
              <h1 className="services-head two">Branding</h1>
              <img
                src={Ellipse}
                alt="ELLIPS"
                className="services-ellipse-one"
              />
            </div>
          </Link>
          <Link to="/ArtProjects" className="linkTo">
            <div className="art">
              <h1 className="services-head three">Art</h1>
              <img
                src={Ellipse}
                alt="ELLIPS"
                className="services-ellipse-two"
              />
            </div>
          </Link>
        </div>
        <div className="services-content-nd">
          <Link to="/UxProjects" className="linkTo">
            <div className="ux">
              <h1 className="services-head four">UX</h1>
              <img
                src={Ellipse}
                alt="ELLIPS"
                className="services-ellipse-three"
              />
            </div>
          </Link>
          <Link to="/Consulting" className="linkTo">
            <div className="consulting">
              <h1 className="services-head five">Consulting</h1>
              <img src={Ellipse} alt="ELLIPS" class="services-ellipse-four" />
            </div>
          </Link>
        </div>
        <div className="services-content-rd">
          <Link to="/Illustration" className="linkTo">
            <div className="illustration">
              <h1 className="services-head six">Illustration</h1>
              <img src={Ellipse} alt="ELLIPS" class="services-ellipse-five" />
            </div>
          </Link>
          <Link to="/UiProjects" className="linkTo">
            <div className="ui">
              <h1 className="services-head seven">UI</h1>
              <img src={Ellipse} alt="ELLIPS" class="services-ellipse-six" />
            </div>
          </Link>
          <Link to="/ProductDesignSketches" className="linkTo">
            <div className="product-design-sketches">
              <h1 className="services-head eight">
                Product design
                <br />
                sketches
              </h1>
              <img
                src={Ellipse}
                alt="ELLIPS"
                className="services-ellipse-seven"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="home-content-nd">
        <h1 className="home-head-nd">Let's grab some coffee!</h1>
      </div>
      <div className="home-icons">
        <Link to="/contact">
          <img
            src={linkedin}
            alt="linkedin"
            className="lincked-in ic"
            onClick={handleClick}
          />
        </Link>
        <img
          src={Ellipse}
          alt="Ellipse"
          className="icon-ellipse-st ell"
          onClick={handleClick}
        />
        <Link to="/contact">
          <img
            src={whatsapp}
            alt="whatsapp"
            className="whatsapp ic"
            onClick={handleClick}
          />
        </Link>
        <Link to="/contact">
          <img
            src={zoom}
            alt="zoom"
            className="zoom ic"
            onClick={handleClick}
          />
        </Link>
        <Link to="/contact">
          <img
            src={instagram}
            alt="instagram"
            className="instagram ic"
            onClick={handleClick}
          />
        </Link>
        <img
          src={Ellipse}
          alt="Ellipse"
          className="icon-ellipse-nd ell"
          onClick={handleClick}
        />
        <Link to="/contact">
          <img
            src={twitter}
            alt="twitter"
            className="twitter ic"
            onClick={handleClick}
          />
        </Link>
        <Link to="/contact">
          <img
            src={email}
            alt="email"
            className="email ic"
            onClick={handleClick}
          />
        </Link>
      </div>

      <div className="home-content-rd">
        <p className="home-rd-parag-st">
          Thank you for visiting our website! We hope you had a pleasant
          experience and were able to find what you were looking for. It was a
          pleasure having you here and we hope to see you again soon. If you
          have any feedback or suggestions for us, please don't hesitate to
          reach out. Until next time,
        </p>
        <p className="home-rd-parag-nd">take care and have a great day!</p>
      </div>
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
    </>
  );
}
