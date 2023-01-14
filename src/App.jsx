import React from "react";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <div className="m-auto xl:w-[1280px]  lg:w-[1120px] h-[8rem] w-auto lag:w-[930px]">
        <Navbar />
      </div>
      <main className=" vsm:px-[0.6rem] m-auto xl:w-[1260px] lag:w-[910px] mt-[4.8rem] lg:w-[1100px] ">
        <Hero />
        <Stats />
        <Popular />
        <Features />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
