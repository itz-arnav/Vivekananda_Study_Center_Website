import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import css from '../SignInSignUpForm/SignInSignUpForm.module.css';
function SignInSignUpForm() {
  const [isSignUp, setIsSignUp] = useState(false);
/*<div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>*/
  return (
    <div className={`${css.container} ${isSignUp ? css.signUpMode : ''}`}>
      <div className={css.formsContainer}>
        <div className={css.signinSignup}>
          <form action="#" className={css.signInForm}>
            <h2 className={css.title}>Sign in</h2>
            <div className={css.inputField}>
              <FontAwesomeIcon className={css.fontAwesomeIcon} icon={faUser} />
              <input type="text" placeholder="Username" />
            </div>
            <div className={css.inputField}>
              <FontAwesomeIcon className={css.fontAwesomeIcon} icon={faLock} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className={`${css.btn} ${css.solid}`} />
            <p className={css.socialText}>Or Sign in with social platforms</p>
            <div className={css.socialMedia}>
              <a href="#" className={css.socialIcon}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className={css.socialIcon}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className={css.socialIcon}>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className={css.socialIcon}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>
          <form action="#" className={css.signUpForm}>
            <h2 className={css.title}>Sign up</h2>
            <div className={css.inputField}>
              <FontAwesomeIcon className={css.fontAwesomeIcon} icon={faUser} />
              <input type="text" placeholder="Username" />
            </div>
            <div className={css.inputField}>
              <FontAwesomeIcon className={css.fontAwesomeIcon} icon={faEnvelope} />
              <input type="email" placeholder="Email" />
            </div>
            <div className={css.inputField}>
              <FontAwesomeIcon className={css.fontAwesomeIcon} icon={faLock} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className={css.btn} value="Sign up" />
            <p className={css.socialText}>Or Sign up with social platforms</p>
            <div className={css.socialMedia}>
              <a href="#" className={css.socialIcon}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className={css.socialIcon}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className={css.socialIcon}>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className={css.socialIcon}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className={css.panelsContainer}>
        <div className={`${css.panel} ${css.leftPanel}`}>
          <div className={css.content}>
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className={`${css.btn} ${css.transparent}`} id={css.signUpBtn} onClick={() => setIsSignUp(true)}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className={css.image} alt="" />
        </div>
        <div className={`${css.panel} ${css.rightPanel}`}>
          <div className={css.content}>
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className={`${css.btn} ${css.transparent}`} id={css.signInBtn} onClick={() => setIsSignUp(false)}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className={css.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignInSignUpForm;
