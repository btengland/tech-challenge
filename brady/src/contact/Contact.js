import "./Contact.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function Contact() {
  const [title, setTitle] = useState(null);
  const [paragraph, setParagraph] = useState(null);

  const addTitle = async (title) => {
    const response = await axios.post("/api/title/", {
      title,
    });
    setTitle(response.data);
  };

  const getTitle = async () => {
    const response = await axios.get("/api/title/");
    setTitle(response.data);
  };

  const addParagraph = async (paragraph) => {
    const response = await axios.post("/api/paragraph/", {
      paragraph,
    });
    setParagraph(response.data);
  };

  const getParagraph = async () => {
    const response = await axios.get("/api/paragraph/");
    setParagraph(response.data);
  };

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
              <input
                value={title}
                onChange={(e) => {
                  setTitle({ saturday: e.target.value });
                }}
                placeholder="Title"
                type="text"
              ></input>
              <input placeholder="Email" type="text"></input>
            </div>
            <textarea
              value={paragraph}
              onChange={(e) => {
                setParagraph({ saturday: e.target.value });
              }}
              className="message"
              placeholder="Message"
              type="text"
            ></textarea>
          </div>
          <div className="submitbtn-container">
            <button
              onClick={() => {
                addParagraph(paragraph);
                addTitle(title);
              }}
              className="submitbtn"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
