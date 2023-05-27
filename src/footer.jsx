import wemail from "./assest/wemail.svg";
import wzoom from "./assest/wzoom.svg";
import wwhatsapp from "./assest/wwhatsapp.svg";
import wtwitter from "./assest/wtwitter.svg";
import wlinkedin from "./assest/wlinkedin.svg";
import winstagram from "./assest/winstagram.svg";
import wgallery from "./assest/wgallery.png";
import wmadeBy from "./assest/wmade-by.png";

export default function Footer() {
  return (
    <>
      <div className="footer-content">
        <div className="footer-line-top"></div>
        <div className="footer-component">
          <div className="footer-component-left">
            <h1 className="footer-left-header">
              Let's grab <br /> some <br /> coffee!
            </h1>
            <div>
              <img src={wmadeBy} alt="madeBy" className="" />
              <img src={wgallery} alt="madeBy" className="" />
            </div>
            <p className="footer-made-parag">
              saja.Gallery 2023 ©
              <br /> Developed By | Ahmed El-Sammak
            </p>
          </div>
          <div className="footer-component-right">
            <div className="footer-icons-container">
              <img src={wlinkedin} alt="icon" className="footer-first-icon" />
              <img src={wwhatsapp} alt="icon" className="footer-icon" />
              <img src={wzoom} alt="icon" className="footer-icon" />
              <img src={winstagram} alt="icon" className="footer-icon" />
              <img src={wtwitter} alt="icon" className="footer-icon" />
              <img src={wemail} alt="icon" className="footer-icon" />
            </div>
            <p className="footer-parag-st">
              Thank you for visiting our website! We hope you had a pleasant
              experience and were able to find what you were looking for. It was
              a pleasure having you here and we hope to see you again soon. If
              you have any feedback or suggestions for us, please don't hesitate
              to reach out. Until next time,
            </p>
            <p className="footer-parag-nd">take care and have a great day!</p>
          </div>
        </div>

        <div className="footer-line-bottom"></div>
      </div>
    </>
  );
}
