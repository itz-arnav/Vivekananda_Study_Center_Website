import React from "react";
import pic1 from "./Home_Photo/1.jpg";
import pic2 from "./Home_Photo/2.jpg";
import pic3 from "./Home_Photo/3.jpg";
import Carousal from "./Carousal";
const slide=[pic1,pic2,pic3]
const Home_Carousal = () => {
  return (
    <div className="w-full select-none relative">
      <img src={slide[0]} alt="slide1"/>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 py-2 bg-red-400"></div>
    </div>
  );
};

export default Home_Carousal;
