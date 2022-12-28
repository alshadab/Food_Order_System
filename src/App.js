import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
