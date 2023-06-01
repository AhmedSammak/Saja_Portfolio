import { useState } from "react";
import email from "./assest/email.svg";
import zoom from "./assest/zoom.svg";
import whatsapp from "./assest/whatsapp.svg";
import twitter from "./assest/twitter.svg";
import linkedin from "./assest/linkedin.svg";
import instagram from "./assest/instagram.svg";
import send from "./assest/send.svg";
import budjet from "./assest/budjet.png";
import Grbudjet from "./assest/Grbudjet.png";
import up from "./assest/up.png";
import down from "./assest/down.png";
import Footer from "./footer";

export default function Contact() {
  const [budjetToggle, setBudjetToggle] = useState(false);
  const [budjetValue, setBudjetValue] = useState(0);
  const [iconChoose, setIconChoose] = useState(1);
  console.log(budjetValue);

  let iconChoosing = () => {
    if (iconChoose === 1) {
      return (
        <img
          src={linkedin}
          alt="icon"
          className="contact-first-icon"
          width={48}
          height={36}
        />
      );
    } else if (iconChoose === 2) {
      return (
        <img
          src={whatsapp}
          alt="icon"
          className="contact-first-icon"
          width={48}
          height={36}
        />
      );
    } else if (iconChoose === 3) {
      return (
        <img
          src={zoom}
          alt="icon"
          className="contact-first-icon"
          width={48}
          height={36}
        />
      );
    } else if (iconChoose === 4) {
      return (
        <img
          src={instagram}
          alt="icon"
          className="contact-first-icon"
          width={48}
          height={36}
        />
      );
    } else if (iconChoose === 5) {
      return (
        <img
          src={twitter}
          alt="icon"
          className="contact-first-icon"
          width={48}
          height={36}
        />
      );
    } else if (iconChoose === 6) {
      return (
        <img
          src={email}
          alt="icon"
          className="contact-first-icon"
          width={48}
          height={36}
        />
      );
    }
  };
  let handleUp = () => {
    if (iconChoose < 6) {
      setIconChoose(iconChoose + 1);
    }
  };
  let handleDown = () => {
    if (iconChoose > 1) {
      setIconChoose(iconChoose - 1);
    }
  };
  return (
    <>
      <div class="contact-container">
        <p class="contact-head-st">A new message will be sent By email!</p>
        <p class="contact-head-nd">
          <span class="contact-to">To : </span> Sajaelramlawi@Gmail.Com
        </p>
        <div class="contact-content">
          <div class="content-head">
            <span class="content-head-span-st">subject : </span>
            <input type="text" class="content-head-text-input" />
            <span class="content-head-span-nd">Suggest an interview via :</span>
            <div className="contact-choosen-icon">
              <div className="up-down">
                <img
                  src={up}
                  alt="icon"
                  className="contact-up-icon"
                  width={28}
                  height={16}
                  onClick={handleUp}
                />
                <img
                  src={down}
                  alt="icon"
                  className="contact-down-icon"
                  width={28}
                  height={16}
                  onClick={handleDown}
                />
              </div>
              {iconChoosing()}
            </div>
          </div>
          <div className="contact-line"></div>

          <p className="contact-parag-st">
            you can write a brief paragraph explaining what you want in your
            message, and you can also <br /> attach any relevant links
            throughout your message. Additionally, if you would like to set a
            <br /> budget for your request, simply click on the money icon
            below. <br /> When it comes to attaching files, please keep in mind
            the following guidelines: <br />
            <br />
            <ul>
              <li>
                Images (.jpg, .gif, .png, up to 10 MB, no more than 4000 px in
                any dimension)
              </li>
              <li>
                Videos (.mp4, .mov, .webm, .ogm, ogv, up to 100 MB, 2 maximum,
                less than 60 seconds)
              </li>
              <li>Audio (.mp3, .wav, up to 10 MB, 20 maximum)</li>
              <li>Document (.pdf, up to 10 MB)</li>
            </ul>
            <br />
            If you would like to schedule a meeting , simply click on the
            calendar icon <br /> below and choose a day and time that works for
            you .
          </p>

          <div className="contact-files">
            <input type="file" className="upload-file" lang="EN" />
            <div className="budjet-container">
              {budjetToggle ? null : (
                <>
                  <img
                    src={budjet}
                    alt="budjet"
                    width={26}
                    height={26}
                    className="budjet-img"
                    onClick={() => setBudjetToggle(!budjetToggle)}
                  />
                  <span
                    className="budjet-span"
                    onClick={() => setBudjetToggle(!budjetToggle)}
                  >
                    Choose a budget
                  </span>
                </>
              )}

              {budjetToggle ? (
                <>
                  <ul className="budjets">
                    <li
                      className="budjet-line"
                      onClick={() => {
                        setBudjetValue(6);
                        setBudjetToggle(!budjetToggle);
                      }}
                    >
                      5000 $ +
                    </li>
                    <li
                      className="budjet-line"
                      onClick={() => {
                        setBudjetValue(5);
                        setBudjetToggle(!budjetToggle);
                      }}
                    >
                      2000 $ - 5000 $
                    </li>
                    <li
                      className="budjet-line"
                      onClick={() => {
                        setBudjetValue(4);
                        setBudjetToggle(!budjetToggle);
                      }}
                    >
                      1000 $ - 2000 $
                    </li>
                    <li
                      className="budjet-line"
                      onClick={() => {
                        setBudjetValue(3);
                        setBudjetToggle(!budjetToggle);
                      }}
                    >
                      500 $ - 1000 $
                    </li>
                    <li
                      className="budjet-line"
                      onClick={() => {
                        setBudjetValue(2);
                        setBudjetToggle(!budjetToggle);
                      }}
                    >
                      250 $ - 500 $
                    </li>
                    <li
                      className="budjet-line"
                      onClick={() => {
                        setBudjetValue(1);
                        setBudjetToggle(!budjetToggle);
                      }}
                    >
                      250 $ -
                    </li>
                  </ul>
                  <img
                    src={Grbudjet}
                    alt="budjet"
                    className="green-budjet-img"
                    width={26}
                    height={26}
                    onClick={() => setBudjetToggle(!budjetToggle)}
                  />
                </>
              ) : null}
            </div>
            <div>
              <input type="date" name="contact-date" className="contact-date" />
            </div>
          </div>
        </div>
        <div class="email-box">
          <span class="email-box-span"> your email | </span>
          <input type="email" class="container-email" />
          <img src={send} alt="send" class="send-img" />
        </div>
      </div>
      <Footer />
    </>
  );
}
