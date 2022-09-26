import React from "react";
import AboutImg from "../assests/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="mx-auto d-flex align-items-center justify-content-between h-50 mt-5 mb-5 about-section"
    >
      <div className="about-text">
        <h2>DISCOVER</h2>
        <h1>UPCOMING EVENTS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged
        </p>
      </div>
      <div className="about-image">
        <img src={AboutImg} alt="img" />
      </div>
    </div>
  );
};
export default About;
