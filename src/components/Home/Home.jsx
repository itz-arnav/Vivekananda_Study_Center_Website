import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carousal from './Carousal/Carousal';
import Our_Product from './Our_Product/Our_Product';

const Home = () => {
  return (
    <div>
      <Header />
      <Carousal/>
      <Our_Product/>
      <Footer />
    </div>
  )
}

export default Home;
