import React, { Component } from "react";

import Header from "./assets/Layouts/Header";
import Navbar from "./assets/Layouts/Navbar";
// import Sign_in from "./pages/Sign-in";
// import Sign_up from "./pages/Sign-up";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./assets/Layouts/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <Home />
        {/* <Sign_in /> */}
        {/* <Sign_up /> */}
        {/* <Contact /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        <Footer />
      </>
    );
  }
}

export default App;
