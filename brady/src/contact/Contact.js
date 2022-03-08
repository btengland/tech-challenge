import "./Contact.css";
import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-header-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="home-con">
          <Link className="homebtn" to="/">
            Home
          </Link>
        </div>
      </div>
      <div className="contact-container">
        <div className="heading-one-contact">
          <div className="heading-words-contact">
            <h1 className="underline-two">Heading</h1>
            <h1>&nbsp;One</h1>
          </div>
          <div className="p3-contact">
            <p3>
              animis animo aperiri cognoscerem consuevit dapibus docui fabulis
              intellegat laudari metum. animis animo aperiri cognoscerem
              consuevit dapibus docui fabulis intellegat laudari metum.
            </p3>
            <p3>
              animis animo aperiri cognoscerem consuevit dapibus docui fabulis
              intellegat laudari metum.
            </p3>
          </div>
        </div>
        <div className="heading-two">
          <h2 className="heading-two-contact">Heading Two</h2>
          <div className="form-container">
            <div className="inputs">
              <input placeholder="First Name" type="text"></input>
              <input placeholder="Last Name" type="text"></input>
            </div>
            <div className="inputs">
              <input placeholder="Title" type="text"></input>
              <input placeholder="Email" type="text"></input>
            </div>
            <textarea
              className="message"
              placeholder="Message"
              type="text"
            ></textarea>
          </div>
          <div className="submitbtn-container">
            <button className="submitbtn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
