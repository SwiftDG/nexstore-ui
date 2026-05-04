import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TopProducts from "./components/TopProducts";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
