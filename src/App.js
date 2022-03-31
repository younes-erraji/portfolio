import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./assets/Layouts/Header";
import Navbar from "./assets/Layouts/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Sign_in from "./pages/Sign-in";
import Sign_up from "./pages/Sign-up";

import Footer from "./assets/Layouts/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/careers" element={<Careers />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/sign-in" element={<Sign_in />}></Route>
            <Route path="/sign-up" element={<Sign_up />}></Route>
          </Routes>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
