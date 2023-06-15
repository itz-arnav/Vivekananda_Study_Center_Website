import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carousal from './Carousal/Carousal';
import Preparing from './Preparing/Preparing';
import Our_Product from './Our_Product/Our_Product';
import Contact from './Contact/Contact';
const Home = () => {
  return (
    <div>
      <Header />
      <Carousal/>
      <Preparing />
      <Our_Product/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home;
