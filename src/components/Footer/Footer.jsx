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


import css from"../Footer/Footer.module.css";

const Footer = () => {
  return (
    <>
    <div className={css.footerContainer}>
      <div className={css.footerContent}>
        <div className={css.linkSection}>
          <div className={css.companyDetails}>
            <div className={`${css.companyDetailsContainer} ${css.titleContainer}`}>
            <HiAcademicCap className={`${css.companyDetailsContainer} ${css.titleContainer}`}/>
            <h2 className={`${css.companyDetailsContainer} ${css.companytitleName}`}>Vivekananda Study Center</h2>
            </div>
            <div className={css.companyDetailsContainer}>
            <MdLocationOn className={css.companyDetailsNameIcon}/>
            <h3 className={css.companyDetailsName}>CIT Road, Salt Lake Sector 4, Kolkata - 700098</h3>
            </div>
            <div className={css.companyDetailsContainer}>
            <MdPhoneCallback className={css.companyDetailsNameIcon}/>
            <h3 className={css.companyDetailsName}>(033) 123-456-789</h3>
            </div>
            <div className={css.companyDetailsContainer}>
            <MdEmail className={css.companyDetailsNameIcon}/>
            <h3 className={css.companyDetailsName}>test@gmail.com</h3>
            </div>

          </div>
          <div className={css.AboutDetails}>
          <h2 className={css.titleName}>About</h2>
          <Link className={css.footerLink} to="/courses">Courses</Link>
          <Link className={css.footerLink} to="/mentors">Mentors</Link>
          <Link className={css.footerLink} to="/refund">Refund</Link>
          <Link className={css.footerLink} to="/conditions">Terms & Conditions</Link>
          <Link className={css.footerLink} to="/payment">Payment</Link>
          </div>
          <div className={css.CategoryDetails}>
          <h2 className={css.titleName}>Category</h2>
          <Link className={css.footerLink} to="/courses">Boards</Link>
          <Link className={css.footerLink} to="/mentors">JEE/NEET</Link>
          <Link className={css.footerLink} to="/refund">Government Exams</Link>
          <Link className={css.footerLink} to="/conditions">State Exams</Link>
          <Link className={css.footerLink} to="/payment">Private Jobs</Link>
          </div>
          <div className={css.getInTouch}>
          <h2 className={css.titleName}>Get in Touch</h2>
          <h3 className={css.normalText}>Send us your email, we'll make sure you never miss a thing!</h3>
          <div className={css.emailSubmitSection}>
            <div className={css.textSection}>
            <GrMailOption className={css.emailMailIcon}/>
            <input type="text" className={css.emailInputText} placeholder="Your Email" />
            </div>
            <button type="submit" className={css.emailbtn}>
              <BsArrowRight className={css.emailIcon}/>
            </button>
          </div>
          <div className={css.socialIconSection}>
            <RiFacebookCircleFill className={css.socialIconLogo}/>
            <RiInstagramLine className={css.socialIconLogo}/>
            <RiYoutubeFill className={css.socialIconLogo}/>
            <RiTwitterFill className={css.socialIconLogo} />
          </div>
          </div>
        </div>
        <hr className={css.footerHr}/>
        <div className={css.copyrightSection}>
          <div className={css.copyrightText}>
            Copyright @2023. All Rights Reserved.
          </div>
          <div className={css.paymentSection}>
            <img src={Apple} alt="" />
            <img src={Visa} alt="" />
            <img src={MasterCard} alt=""  />
            <img src={Paypal} alt="" />
          </div>
        </div>
        </div>
    </div>
     
    </>
  )
}

export default Footer
