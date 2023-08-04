import React from "react";
import css from "../Contact/Contact.module.css";

const Contact = () => {
  return (
    <div className={css.contactContainer}>
      <h2 className={css.titleContact}>Contact Us</h2>
      <div className={css.formContainer}>
        <form name="contact" className={`${css.contactInform} ${css.form}`}>
          <div className={css.oneSection}>
            <div className={css.formControl}>
              <input
                type="text"
                name="firstname"
                id="firstname" // Added id
                className={css.formInput}
                placeholder="First Name" // Updated placeholder
                required
              />
              <label htmlFor="firstname" className={css.formLabel}>
                First Name
              </label>
            </div>
            <div className={css.formControl}>
              <input
                type="text"
                name="lastname"
                id="lastname" // Added id
                className={css.formInput}
                placeholder="Last Name" // Updated placeholder
                required
              />
              <label htmlFor="lastname" className={css.formLabel}>
                Last Name
              </label>
            </div>
          </div>

          <div className={css.oneSection}>
            <div className={css.formControl}>
              <input
                type="email"
                name="email"
                id="email" // Added id
                className={css.formInput}
                placeholder="Email" // Updated placeholder
                required
              />
              <label htmlFor="email" className={css.formLabel}>
                Email
              </label>
            </div>
            <div className={css.formControl}>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber" // Added id
                className={css.formInput}
                placeholder="Phone Number" // Updated placeholder
                required
              />
              <label htmlFor="phoneNumber" className={css.formLabel}>
                Phone Number
              </label>
            </div>
          </div>

          <div className={css.formControl}>
            <textarea
              name="message"
              id="message" // Added id
              className={css.formInput}
              placeholder="Message" // Updated placeholder
              required
            />
            <label htmlFor="message" className={css.formLabel}>
              Message
            </label>
          </div>
          <button type="submit" className={css.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
