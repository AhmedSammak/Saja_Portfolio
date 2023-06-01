import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Ellips from "../assest/Ellipse.png";
import emptybottom from "../assest/empty-bottom.png";
import thank from "../assest/thanking.png";
import Footer from "../footer";

export default function SingleProjectPage() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [scroll]);

  return (
    <>
      <div>
        <Link to="/services" className="linkTo">
          <span className="oneproject-span-st">x</span>
          <img src={Ellips} alt="Ellips" className="oneproject-ellips" />
        </Link>
        <h1 className="oneproject-head">
          UX case study for Google Education platform
        </h1>
        <p className="oneproject-parag">
          There are 30% of Internet users in Palestine are unable to direct
          their interests and develop themselves smoothly and effectively. The
          strategy team at GOOGLEARN identified a lack of general knowledge
          about educational platforms, the difficulty of using existing ones,
          and a limited understanding of personal impact as critical drivers of
          time-wasting without direction. Design an application that improves
          education on modern and easy topics for self-development and helps
          people manage their own educational and training courses. You can view
          the full project through the link below more
        </p>
        <p className="oneproject-parag-nd">
          https://sajaportfolio.wixsite.com/saja-a/01-googlearn
        </p>
        <div className="oneproject-line"></div>

        <img src={emptybottom} alt="pic" className="oneproject-img1" />
        <img src={emptybottom} alt="pic" className="oneproject-img2" />
        <img src={emptybottom} alt="pic" className="oneproject-img3" />
        <img src={emptybottom} alt="pic" className="oneproject-img4" />
        <img src={emptybottom} alt="pic" className="oneproject-img5" />
        <img src={emptybottom} alt="pic" className="oneproject-img6" />
        <img
          src={thank}
          alt="pic"
          className="oneproject-thank"
          onClick={() => {
            setScroll(scroll + 1);
          }}
        />
      </div>
      <div className="oneproject-footer">
        <Footer />
      </div>
    </>
  );
}
