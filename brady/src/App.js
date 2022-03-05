import "./App.css";
import logo from "./assets/Logo.png";
import rabbit from "./assets/Rabbit.png";
import shield from "./assets/Shield.png";
import talkie from "./assets/Talkie.png";

function App() {
  return (
    <div className="App">
      <div className="head">
        <img src={logo} alt="logo" />
        <button>Contact</button>
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
      <div className="head-one"></div>
    </div>
  );
}

export default App;
