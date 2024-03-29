import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import css from "../FastContact/FastContact.module.css";

const FastContact = () => {
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");

  const handleUpdatename = (e) => {
    var letter=/^[A-Za-z ]*$/;
    
    if(e.target.value.match(letter)){
    setFname(e.target.value.toUpperCase().substr(0,50));
    }
  };
  const handleUpdatephone = (e) => {
    var num=/^[0-9]*$/;
    if(e.target.value.match(num))
        setPhone(e.target.value.substr(0,10));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We have got your information \n we will call ASAP");
    console.log("Form submitted:", fname, " ", phone);
    setPhone("");
    setFname("");

    // You can send 'formValues' to your backend here.
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={`${css.pageTitle} ${css.title}`}>TO GET A CALLBACK</div>
        <div className={`${css.secondaryTitle} ${css.title}`}>
          Please fill this form .
        </div>
        <div className={css.input1}>
        <FontAwesomeIcon className={css.fontAwesomeIcon} icon={faUser} />
          <input
            type="text"
            name="name"
            className={`${css.name} ${css.formEntry}`}
            pattern="[A-Za-z ]*"
            placeholder="Name"
            value={fname}
            onChange={handleUpdatename}
            required
          />
          <FontAwesomeIcon className={css.fontAwesomeIcon} icon={faPhone} />
          <input
            type="tel"
            name="phone"
            pattern="[0-9]*"
            className={`${css.phone} ${css.formEntry}`}
            placeholder="Phone Number"
            value={phone}
            onChange={handleUpdatephone}
            required
          />
          
          <button className={`${css.submit} ${css.formEntry}`} type="submit">
          <FontAwesomeIcon className={css.fontAwesomeIcon1} icon={faPaperPlane}  type="submit"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FastContact;
