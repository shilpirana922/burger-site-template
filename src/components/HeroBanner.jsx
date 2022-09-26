import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BurgerImg from "../assests/s3.png";

const HeroBanner = () => {
  return (
    <Container className="hero-banner" fluid>
      <div className="d-flex flex-column justify-content-center align-items-center p-2">
        <span className="text-uppercase banner-tagline p-2 pt-0 pb-0">
          It's good time for the good taste of burger
        </span>
        <h1 className="text-uppercase banner-text">BURGER</h1>
        <h3 className="text-uppercase banner-week-text">WEEK</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center p-2">
        <img
          src={BurgerImg}
          alt="hero-banner-img"
          className="banner-burger-img"
        />
      </div>
    </Container>
  );
};

export default HeroBanner;
