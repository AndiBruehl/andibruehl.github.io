import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Downloads from "./components/Downloads/Downloads";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import YouTube from "./components/YouTube/YouTube";
import Links from "./components/Links/Links";
import Certs from "./components/Certs/Certs";
import Pong from "./components/Pong/Pong";
import Imprint from "./components/Contact/Imprint";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <div className="App" style={{ overflowX: "hidden" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pong" element={<Pong />} />
            <Route path="/links" element={<Links />} />
            <Route path="/youtube" element={<YouTube />} />
            <Route path="/certs" element={<Certs />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
