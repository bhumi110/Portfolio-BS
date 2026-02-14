import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {

  return (
    <>
    <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
