import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Gradbar from "./assets/Layouts/Gradbar";
import Header from "./assets/Layouts/Header";
import Navbar from "./assets/Layouts/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";

import NotFound from "./pages/404";
import ThreeDimensions from "./pages/3D";

import Up from "./assets/components/Up";

import Footer from "./assets/Layouts/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Gradbar />
          <Header />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/careers" element={<Careers />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>

            <Route path="/3D" element={<ThreeDimensions />}></Route>
            <Route path="/404" element={<NotFound />}></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Up />
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
