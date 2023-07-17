import React from "react";
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero'
import HeadlineCards from "./Components/HeadlineCards";
import Food from './Components/Food'
import Categories from "./Components/Categories";
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;