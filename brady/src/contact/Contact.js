import "./Contact.css";
import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-header-container">
        <img src={logo} alt="logo" />
        <Link className="homebtn" to="/">
          Home
        </Link>
      </div>
      <div className="contact-container">
        <div className="heading-one-contact">
          <h1 className="underline-two">Heading</h1>
          <h1>&nbsp;One</h1>
          <p3>
            animis animo aperiri cognoscerem consuevit dapibus docui fabulis
            intellegat laudari metum. animis animo aperiri cognoscerem consuevit
            dapibus docui fabulis intellegat laudari metum.
          </p3>
          <p3>
            animis animo aperiri cognoscerem consuevit dapibus docui fabulis
            intellegat laudari metum.
          </p3>
        </div>
        <div className="heading-two"></div>
      </div>
    </div>
  );
}

export default Contact;
