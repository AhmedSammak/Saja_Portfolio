import madeBy from "./assest/madeBy.png";
import Gallery from "./assest/Gallery.png";
import CafePic from "./assest/cafe.png";
export default function Cafe() {
  return (
    <>
      <div className="cafe-container">
        <img src={CafePic} alt="NO THING YET" className="cafe-img" />
        <h1 className="cafe-head">There is nothing yet</h1>
        <p className="cafe-parag-st">see you soon</p>
        <p className="cafe-parag-nd">
          Thank you for visiting our website! We hope you had a pleasant
          experience and were able to find what you were looking for. It was a
          pleasure having you here and we <br />
          hope to see you again soon. If you have any feedback or suggestions
          for us, please don't hesitate to reach out. Until next time,
        </p>
        <p className="cafe-parag-rd">take care and have a great day!</p>
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
