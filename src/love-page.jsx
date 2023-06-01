import { useState } from "react";
import pic1 from "./assest/avatars/pic1.png";
import pic2 from "./assest/avatars/pic2.png";
import pic3 from "./assest/avatars/pic3.png";
import pic4 from "./assest/avatars/pic4.png";
import pic5 from "./assest/avatars/pic5.png";
import pic6 from "./assest/avatars/pic6.png";
import pic7 from "./assest/avatars/pic7.png";
import pic8 from "./assest/avatars/pic8.png";
import pic9 from "./assest/avatars/pic9.png";
import pic10 from "./assest/avatars/pic10.png";
import pic11 from "./assest/avatars/pic11.png";
import pic12 from "./assest/avatars/pic12.png";
import pic13 from "./assest/avatars/pic13.png";
import pic14 from "./assest/avatars/pic14.png";
import pic15 from "./assest/avatars/pic15.png";
import pic16 from "./assest/avatars/pic16.png";
import pic17 from "./assest/avatars/pic17.png";
import pic18 from "./assest/avatars/pic18.png";
import pic19 from "./assest/avatars/pic19.png";
import pic20 from "./assest/avatars/pic20.png";
import pic21 from "./assest/avatars/pic21.png";
import pic22 from "./assest/avatars/pic22.png";
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
  const [avatarToggle, setAvatarToggle] = useState(false);
  const [avatarChoice, setAvatarChoice] = useState(0);
  const [writterName, setWritterName] = useState("");
  const [opinion, setOpinion] = useState("");
  const [currentValue, setCurrentValue] = useState(-1);
  let choosenImg = () => {
    if (avatarChoice === 0) {
      return null;
    } else if (avatarChoice === 1) {
      return <img src={pic1} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 2) {
      return <img src={pic2} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 3) {
      return <img src={pic3} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 4) {
      return <img src={pic4} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 5) {
      return <img src={pic5} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 6) {
      return <img src={pic6} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 7) {
      return <img src={pic7} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 8) {
      return <img src={pic8} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 9) {
      return <img src={pic9} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 10) {
      return <img src={pic10} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 11) {
      return <img src={pic11} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 12) {
      return <img src={pic12} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 13) {
      return <img src={pic13} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 14) {
      return <img src={pic14} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 15) {
      return <img src={pic15} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 16) {
      return <img src={pic16} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 17) {
      return <img src={pic17} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 18) {
      return <img src={pic18} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 19) {
      return <img src={pic19} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 20) {
      return <img src={pic20} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 21) {
      return <img src={pic21} alt="pic" className="card-img-ava" />;
    } else if (avatarChoice === 22) {
      return <img src={pic22} alt="pic" className="card-img-ava" />;
    }
  };

  function handleSubmit(event) {
    console.log(writterName, opinion, currentValue, avatarChoice);
    event.preventDefault();

    setAvatarChoice(0);
    setWritterName("");
    setOpinion("");
    setCurrentValue(-1);
  }

  const stars = Array(5).fill(0);
  function handleStarClick(value) {
    setCurrentValue(value);
  }

  return (
    <div className="love-container">
      <form
        id="loveForm"
        className="love-form"
        method="POST"
        // mohannad
        target="_self"
        action="http://localhost/portfolio/back-end/love.php"
        // encType="multipart/from-data"
        // onSubmit={handleSubmit}
      >
        <div className="love-st">
          <div className="love-line"></div>
          <p className="love-parag-st">add your comment</p>
          <div className="stars">
            <input type="hidden" value={currentValue + 1} name="stars" />
            <input type="hidden" value={avatarChoice} name="avatarChoice" />
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
            {avatarToggle ? (
              <div className="avatar-show">
                <img
                  src={pic1}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(1);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic2}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(2);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic3}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(3);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic4}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(4);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic5}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(5);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic6}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(6);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic7}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(7);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic8}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(8);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic9}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(9);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic10}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(10);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic11}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(11);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic12}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(12);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic13}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(13);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic14}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(14);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic15}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(15);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic16}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(16);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic17}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(17);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic18}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(18);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic19}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(19);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic20}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(20);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic21}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(21);
                    setAvatarToggle(false);
                  }}
                />
                <img
                  src={pic22}
                  alt="pic"
                  className="card-img-ava"
                  onClick={(e) => {
                    e.preventDefault();
                    setAvatarChoice(22);
                    setAvatarToggle(false);
                  }}
                />
              </div>
            ) : null}
            <button
              className="avatar-choose"
              onClick={(e) => {
                e.preventDefault();
                setAvatarToggle(!avatarToggle);
              }}
            >
              {choosenImg()}
            </button>

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
            ClassNa="card-container oneLO"
            name="khadij."
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic1}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container twoLO"
            name="bayan"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic2}
            starColor="#9747FF"
          />
          <Card
            ClassNa="card-container threeLO"
            name="losy."
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic3}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container fourLO"
            name="مجد"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic4}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container fiveLO"
            name="rayan."
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic5}
            starColor="#84EA00"
          />
        </div>
        <div className="horizontal-2">
          <Card
            ClassNa="card-container sixLO"
            name="محمد"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic6}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container sevenLO"
            name="ahmed"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic7}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container eightLO"
            name="لين"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic8}
            starColor="#9747FF"
          />
          <Card
            ClassNa="card-container nineLO"
            name="tome"
            opinion="The best work experience with Saja, its site is easy to use and its communication is excellent, the response is within 24 hours"
            picUrl={pic9}
            starColor="#84EA00"
          />
          <Card
            ClassNa="card-container tenLO"
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

// mohannad fetch from love.php C:\xampp\htdocs\portfolio\back-end
fetch("http://localhost/portfolio/back-end/love.php")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
