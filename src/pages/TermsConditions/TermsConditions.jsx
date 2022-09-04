import React from "react";

import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="wrapper">
      <div className="terms">
        <div className="terms__container">
          <p className="terms__para">
            Dear, thank you for using /labz. To proceed, please read and accept
            our latest <span>terms and conditions.</span>
          </p>

          <div className="terms__actions">
            <button className="bgwhite-border-btn">Decline</button>

            <Link to="/verify" className="aqua-btn">
              Accept
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsConditions;
