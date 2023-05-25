import { useState } from "react";
import pic1 from "./assest/pic1.png";
import pic2 from "./assest/pic2.png";
import pic3 from "./assest/pic3.png";
import pic4 from "./assest/pic4.png";
import pic5 from "./assest/pic5.png";
import pic6 from "./assest/pic6.png";
import pic7 from "./assest/pic7.png";
import pic8 from "./assest/pic8.png";
import pic9 from "./assest/pic9.png";
import pic10 from "./assest/pic10.png";
import madeBy from "./assest/madeBy.png";
import Gallery from "./assest/Gallery.png";
import { FaStar } from "react-icons/fa";

function Card({ name, opinion, ClassNa, picUrl, starColor }) {
  const stars = Array(5).fill(0);

  return (
    <div className={ClassNa}>
      <div className="card-head">
        <img src={picUrl} alt="pic" className="card-img" />
        <h1 className="card-name">{name}</h1>
      </div>
      <p className="card-opinion">{opinion}</p>
      <div className="card-stars">
        {stars.map((index) => {
          return <FaStar key={index} color={starColor} size={15} />;
        })}
      </div>
    </div>
  );
}

export default function LovePage() {
  const [writterName, setWritterName] = useState("");
  const [opinion, setOpinion] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    const value = Object.fromEntries(formData.entries());

    console.log(value);
    fetch("http://localhost/portfolio/portfolio.php", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form data submitted successfully!");
          console.log(stars, writterName, opinion);
        } else {
          console.error("Form data submission failed!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setWritterName("");
    setOpinion("");
    setCurrentValue(-1);
  }

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(-1);
  function handleStarClick(value) {
    setCurrentValue(value);
  }

  return (
    <div className="love-container">
      <form
        id="loveForm"
        className="love-form"
        method="POST"
        encType="multipart/from-data"
        onSubmit={handleSubmit}
      >
        <div className="love-st">
          <div className="love-line"></div>
          <p className="love-parag-st">add your comment</p>
          <div className="stars">
            <input type="hidden" value={currentValue + 1} name="stars" />
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  style={{
                    margin: "5px",
                    cursor: "pointer",
                  }}
                  size={46}
                  color={index > currentValue ? "#D9D9D9 " : "#EA9A00 "}
                  onClick={() => handleStarClick(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="input-avatar">
          <input
            name="writterName"
            className="form-input"
            placeholder="Your Name"
            value={writterName}
            onChange={(e) => setWritterName(e.target.value)}
          />
          <div className="avatar-container">
            <select className="avatar-choose">
              <option>pic1</option>
              <option>pic2</option>
              <option>pic3</option>
              <option>pic4</option>
              <option>pic5</option>
              <option>pic6</option>
              <option>pic7</option>
              <option>pic8</option>
              <option>pic9</option>
              <option>pic10</option>
            </select>

            <p className="avatar">Choose An avatar</p>
          </div>
        </div>
        <textarea
          name="opinion"
          className="form-text-area"
          placeholder="Write Something"
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
        ></textarea>
        <button className="form-buttun" name="submit">
          SUBMIT
        </button>
      </form>
      <div className="all-card-container">
        <div className="horizontal-1">
          <Card
            ClassNa="card-container one"
            name="khadij."
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic1}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container two"
            name="bayan"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic2}
            starColor="#9747FF"
          />
          <Card
            ClassNa="card-container three"
            name="losy."
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic3}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container four"
            name="مجد"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic4}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container five"
            name="rayan."
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic5}
            starColor="#84EA00"
          />
        </div>
        <div className="horizontal-2">
          <Card
            ClassNa="card-container six"
            name="محمد"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic6}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container seven"
            name="ahmed"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic7}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container eight"
            name="لين"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic8}
            starColor="#9747FF"
          />
          <Card
            ClassNa="card-container nine"
            name="tome"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic9}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container ten"
            name="Kaly."
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic10}
            starColor="#84EA00"
          />
        </div>
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
    </div>
  );
}
