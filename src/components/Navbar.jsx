import React from "react";
import Stack from "react-bootstrap/Stack";

const Navbar = () => {
  return (
    <ul class="nav justify-content-end nv-bg p-0 m-0" id="nav-bar">
      <li class="nav-item">
        <a class="nav-link" href="/">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">
          Menu
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">
          Our Stroy
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
