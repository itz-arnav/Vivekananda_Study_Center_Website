import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carousal from './Carousal/Carousal';
import Preparing from './Preparing/Preparing';
import Our_Product from './Our_Product/Our_Product';
import Contact from './Contact/Contact';
import { Feature } from './Feature/Feature';
import FastContact from '../FastContact/FastContact';
const Home = () => {
  return (
    <div>
      <Header />
      <Carousal/>
      <FastContact/>
      <Preparing />
      <Our_Product/>
      <Feature/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home;
