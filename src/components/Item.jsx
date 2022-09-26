import React from "react";
import Button from "react-bootstrap/Button";
import S1 from "../assests/s1.png";

const Item = () => {
  return (
    <div className="d-flex flex-column align-items-center w-25 m-3 item">
      <div className="item-img">
        <img src={S1} alt="s1-item" className="w-100" />
      </div>
      <div className="item-name text-uppercase fw-bolder text-center fs-4">
        LOREM IPSUM DOLOR
      </div>
      <p className="item-description text-center" style={{ fontSize: "14px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Button className="btn btn-danger text-uppercase rounded-0 fw-bolder">
        Order now
      </Button>
    </div>
  );
};

export default Item;
