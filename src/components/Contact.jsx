import React from "react";
import BgImage from "../assests/footer.png";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <div id="contact" style={{ backgroundImage: `url(${BgImage})` }}>
      <h1>Book Your Table</h1>
      <form className="w-50 d-flex flex-row justify-content-center mb-5">
        <div className="form-section d-flex flex-column justify-content-between p-2">
          <input
            type="text"
            className="form-control mt-3 rounded-0"
            placeholder="NAME"
          />
          <input
            type="text"
            className="form-control mt-3 rounded-0"
            placeholder="DATE"
          />
          <input
            type="text"
            className="form-control mt-3 rounded-0"
            placeholder="PEOPLE"
          />
        </div>
        <div className="form-section d-flex flex-column justify-content-between p-2">
          <input
            type="text"
            className="form-control mt-3 rounded-0"
            placeholder="EMAIl"
          />
          <input
            type="text"
            className="form-control mt-3 rounded-0"
            placeholder="TIME"
          />
          <Button className="btn btn-danger w-100 mt-3 rounded-0">
            FIND A TABLE
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
