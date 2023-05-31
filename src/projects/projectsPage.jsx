import Footer from "../footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import leftArrow from "../assest/leftArrow.png";
import Ellips from "../assest/Ellipse.png";
import emptytopright from "../assest/empty-top-right.png";
import emptytopleft from "../assest/empty-top-left.png";
import emptybottom from "../assest/empty-bottom.png";

export default function ProjectsPage({ title }) {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="projects-container">
      <div className="projects-top-line"></div>

      <Link to="/services">
        <img src={leftArrow} alt="arrow" className="projects-arrow" />
      </Link>
      <img src={Ellips} alt="Elips" className="projects-ellips" />
      <p className="project-type">{title}</p>
      <div className="projects-show-st">
        <div className="projects-inLine">
          <Link to="/EmptyPage">
            <img
              src={emptytopleft}
              alt="empty"
              className="projectST-top-left"
              width={474}
              height={494}
            />
          </Link>
          <Link to="/ProjectPage">
            <img
              src={emptytopright}
              alt="empty"
              className="projectST-top-right"
              width={711}
              height={494}
            />
          </Link>
        </div>
        <img
          src={emptybottom}
          alt="empty"
          className="projectST-bottom"
          width={1246}
          height={618}
        />
      </div>
      <div className="projects-show-nd">
        <div className="projects-inLine">
          <img
            src={emptytopleft}
            alt="empty"
            className="projectST-top-left"
            width={474}
            height={494}
          />
          <img
            src={emptytopright}
            alt="empty"
            className="projectST-top-right"
            width={711}
            height={494}
          />
        </div>
        <img
          src={emptybottom}
          alt="empty"
          className="projectST-bottom"
          width={1246}
          height={618}
        />
      </div>
      <div className="projects-show-rd">
        <div className="projects-inLine">
          <img
            src={emptytopleft}
            alt="empty"
            className="projectST-top-left"
            width={474}
            height={494}
          />
          <img
            src={emptytopright}
            alt="empty"
            className="projectST-top-right"
            width={711}
            height={494}
          />
        </div>
        <img
          src={emptybottom}
          alt="empty"
          className="projectST-bottom"
          width={1246}
          height={618}
        />
      </div>
      <div className="projects-bottom-line"></div>
      <div className="projects-page-number ">
        <img
          src={Ellips}
          alt="ellips-down"
          className={`page-number${pageNumber}-ellips`}
        />
        <span
          className="page-number page-number1"
          onClick={() => setPageNumber(1)}
        >
          1
        </span>
        <img
          src={Ellips}
          alt="ellips-down"
          className={`page-number${pageNumber}-ellips`}
        />
        <span
          className="page-number page-number2"
          onClick={() => setPageNumber(2)}
        >
          2
        </span>
        <img
          src={Ellips}
          alt="ellips-down"
          className={`page-number${pageNumber}-ellips`}
        />
        <span
          className="page-number page-number3"
          onClick={() => setPageNumber(3)}
        >
          3
        </span>
        <img
          src={Ellips}
          alt="ellips-down"
          className={`page-number${pageNumber}-ellips`}
        />
        <span
          className="page-number page-number4"
          onClick={() => setPageNumber(4)}
        >
          4
        </span>
        <div className="space"></div>
        <Footer />
      </div>
    </div>
  );
}
