import React from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Program from "./components/program/Program";
import Reason from "./components/reason/Reason";
import Plans from "./components/plans/Plans";
import Testimonial from "./components/testimonial/Testimonial";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}
