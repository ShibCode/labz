import React from "react";

import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

import "./EmailVerification.css";

const EmailVerification = () => {
  return (
    <div className="wrapper">
      <div className="verification">
        <p className="verification__topText">
          You need to verify your email address to activate your account
        </p>

        <div className="verification__container">
          <h1 className="verification__heading">Verify your Email</h1>

          <p className="verification__para">
            An email with instructions to verify your email address has been
            sent to you. Haven't recieved a verification code in your email?
            Click the button to re-send or contact our support.
          </p>

          <input type="text" className="verification__input" />

          <div className="verification__actions">
            <button className="bgwhite-border-btn">Contact Support</button>

            <button className="bgwhite-border-btn">Resend</button>

            <Link to="/master-pin" className="aqua-btn">
              Submit
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmailVerification;
