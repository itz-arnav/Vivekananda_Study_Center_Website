import React from 'react'
import Header from "../Header/Header";
import Home_Carousal from './Carousal/Home_Carousal';
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Home_Carousal/>
      <Footer />
    </div>
  )
}

export default Home;
