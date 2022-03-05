import "./Home.css";
import logo from "../assets/Logo.png";
import rabbit from "../assets/Rabbit.png";
import shield from "../assets/Shield.png";
import talkie from "../assets/Talkie.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="head">
        <img src={logo} alt="logo" />
        <Link className="contactbtn" to="/contact">
          Contact
        </Link>
      </div>
      <div className="boxes">
        <div className="box one">
          <div className="image-container">
            <img className="image-talkie" src={talkie} alt="talkie" />
          </div>
          <h2>Heading Two</h2>
          <p>
            animis animo aperiri cognoscerem consuevit dapibus docui fabulis
            intellegat laudari metum.
          </p>
          <p2>Learn More</p2>
        </div>
        <div className="box two">
          <div className="image-container">
            <img className="image-rabbit" src={rabbit} alt="rabbit" />
          </div>
          <h2>Heading Two</h2>
          <p>
            animis animo aperiri cognoscerem consuevit dapibus docui fabulis
            intellegat laudari metum.
          </p>
          <p2>Learn More</p2>
        </div>
        <div className="box three">
          <div className="image-container">
            <img className="image-shield" src={shield} alt="shield" />
          </div>
          <h2>Heading Two</h2>
          <p>
            animis animo aperiri cognoscerem consuevit dapibus docui fabulis
            intellegat laudari metum.
          </p>
          <p2>Learn More</p2>
        </div>
      </div>
      <div className="head-one">
        <div className="head-one-word">
          <h1 className="underline">Heading</h1>
          <h1>&nbsp;One</h1>
        </div>
        <p3>
          Remove the duplicates in 2 Javascript objects (found in readme), add
          the results into an array and output the list names in an unordered
          list below the paragraph when
          <button className="link">this link</button>is clicked. If the
          operation is completed already, notify the user that this has already
          been done.
        </p3>
      </div>
    </div>
  );
}

export default Home;
