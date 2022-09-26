import React from "react";
import Container from "react-bootstrap/Container";
import Banner from "../assests/footerbanner.png";

const Footer = () => {
  return (
    <Container fluid className="p-4 text-center footer-section">
      <img src={Banner} alt="footer-banner" className="footer-banner" />
    </Container>
  );
};
export default Footer;
