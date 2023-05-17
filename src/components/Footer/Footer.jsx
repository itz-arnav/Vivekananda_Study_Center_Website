import React from 'react'

import Apple from "../../assets/apple_pay.png";
import Visa from "../../assets/visa.png"
import MasterCard from "../../assets/mastercard.png";
import Paypal from "../../assets/paypal.png"
import { HiAcademicCap } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { RiFacebookCircleFill, RiInstagramLine, RiYoutubeFill, RiTwitterFill } from 'react-icons/ri';
import { GrMailOption } from 'react-icons/gr';
import { MdLocationOn, MdPhoneCallback, MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';


import "./Footer.css";

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className="footerContent">
        <div className="linkSection">
          <div className="companyDetails">
            <div className="companyDetailsContainer titleContainer">
            <HiAcademicCap className='companyDetailsNameIcon titleIcon'/>
            <h2 className="companyDetailsName companytitleName">Vivekananda Study Center</h2>
            </div>
            <div className="companyDetailsContainer">
            <MdLocationOn className='companyDetailsNameIcon'/>
            <h3 className="companyDetailsName">CIT Road, Salt Lake Sector 4, Kolkata - 700098</h3>
            </div>
            <div className="companyDetailsContainer">
            <MdPhoneCallback className='companyDetailsNameIcon'/>
            <h3 className="companyDetailsName">(033) 123-456-789</h3>
            </div>
            <div className="companyDetailsContainer">
            <MdEmail className='companyDetailsNameIcon'/>
            <h3 className="companyDetailsName">test@gmail.com</h3>
            </div>

          </div>
          <div className="AboutDetails">
          <h2 className='titleName'>About</h2>
          <Link className='footerLink' to="/courses">Courses</Link>
          <Link className='footerLink' to="/mentors">Mentors</Link>
          <Link className='footerLink' to="/refund">Refund</Link>
          <Link className='footerLink' to="/conditions">Terms & Conditions</Link>
          <Link className='footerLink' to="/payment">Payment</Link>
          </div>
          <div className="CategoryDetails">
          <h2 className='titleName'>Category</h2>
          <Link className='footerLink' to="/courses">Boards</Link>
          <Link className='footerLink' to="/mentors">JEE/NEET</Link>
          <Link className='footerLink' to="/refund">Government Exams</Link>
          <Link className='footerLink' to="/conditions">State Exams</Link>
          <Link className='footerLink' to="/payment">Private Jobs</Link>
          </div>
          <div className="getInTouch">
          <h2 className='titleName'>Get in Touch</h2>
          <h3 className='normalText'>Send us your email, we'll make sure you never miss a thing!</h3>
          <div className="emailSubmitSection">
            <div className="textSection">
            <GrMailOption className='emailMailIcon'/>
            <input type="text" className='emailInputText' placeholder='Your Email'/>
            </div>
            <button type="submit" className='emailbtn'>
              <BsArrowRight className='emailIcon'/>
            </button>
          </div>
          <div className="socialIconSection">
            <RiFacebookCircleFill className='socialIconLogo'/>
            <RiInstagramLine className='socialIconLogo'/>
            <RiYoutubeFill className='socialIconLogo'/>
            <RiTwitterFill className='socialIconLogo' />
          </div>
          </div>
        </div>
        <hr className='footerHr'/>
        <div className="copyrightSection">
          <div className="copyrightText">
            Copyright @2023. All Rights Reserved.
          </div>
          <div className="paymentSection">
            <img src={Apple} alt="" />
            <img src={Visa} alt="" />
            <img src={MasterCard} alt=""  />
            <img src={Paypal} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
