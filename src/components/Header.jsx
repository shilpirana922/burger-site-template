import React from "react";
import Logo from "../assests/logo.png";

const Header = () => {
  return (
    <ul className="nav justify-content-between nv-bg pt-1">
      <li className="nav-item">
        <a className="nav-link active p-2" href="/">
          <img src={Logo} alt="logo" />
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link position-relative top-50"
          id="contact-details"
          href="/"
        >
          Express Delivery +1 234 567 890
        </a>
      </li>
    </ul>
  );
};

export default Header;
