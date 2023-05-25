import madeBy from "./assest/madeBy.png";
import Gallery from "./assest/Gallery.png";
export default function About() {
  return (
    <div className="about-container">
      <h1 class="about-head">
        Welcome to my Gallery website! I'm glad you're here.
      </h1>
      <p class="about-parag-st">
        My name is <span class="about-span-st">Saja Alramlawi</span> , and I am
        a designer with a passion for creating user-centered <br />
        designs that are both functional and visually pleasing.
      </p>
      <p class="about-parag-nd">
        Here on my website, you'll find a collection of my favorite design
        projects. These include examples of my work in UX/UI design, graphic
        design, and digital illustration. I hope that as you take a look around,
        you'll get a sense of
        <span class="about-span-nd">my design philosophy and style .</span>
        <br />
        But my website isn't just about showcasing my work - I'm also here to
        help you with any design-related questions or challenges you may have.
        As a designer with a wealth of experience, I am offering consultation
        services on a variety of design topics such as UI design, UX design,
        graphic design, and digital drawing.
      </p>
      <p class="about-parag-rd">
        So whether you're a business owner looking to improve your website or
        app, a designer seeking inspiration, or simply someone with a curiosity
        about design, I invite you to take a look around and see what I have to
        offer.
        <br />
        I'm always happy to answer any questions you might have, and I welcome
        your feedback on my work.
      </p>
      <p class="about-parag-th">
        Thank you for visiting my website. I hope you enjoy your time here ,
        <br />
        and I look forward to connecting
        <span class="about-span-rd"> with you!</span>
      </p>{" "}
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
