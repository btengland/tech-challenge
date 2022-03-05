import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./contact/Contact";
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
