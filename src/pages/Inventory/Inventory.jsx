import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faPaste } from "@fortawesome/free-regular-svg-icons";

import {
  faChevronLeft,
  faArrowRightArrowLeft,
  faRotate,
  faHorse,
  faCoins,
  faChartLine,
  faGrip,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

import "./Inventory.css";
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown";

export default function Inventory() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="inventory">
      <div className="header__wrapper">
        <div className="inventory__header">
          <div className="inventory__headerLeft">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="inventory__headerBack"
              onClick={() => navigate(-1)}
            />

            <img src="assets/logo-gif.gif" alt="logo" />
          </div>

          <div
            className="inventory__user"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faUser} />

            <ProfileDropdown isActive={showDropdown} />
          </div>
        </div>
      </div>

      <div className="inventory__topWrapper">
        <div className="inventory__top">
          <div className="inventory__topUp">
            <h1>Adamant Duck</h1>

            <span>0.00000 ETH</span>
          </div>

          <div className="inventory__topDown">
            <span className="inventory__id">
              0xbcABf8779720084dB123... <FontAwesomeIcon icon={faPaste} />
            </span>

            <span className="inventory__buy">Buy ETH</span>
          </div>
        </div>
      </div>

      <div className="inventory__centerWrapper">
        <div className="inventory__center">
          <div className="inventory__centerLeft">
            <div className="inventory__selected">
              <FontAwesomeIcon icon={faCoins} />
              <span>Tokens</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              <span>Transactions</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faRotate} />
              <span>Swap</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faChartLine} />
              <span>Activity</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faGrip} />
              <span>App</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faGear} />
              <span>Settings</span>
            </div>
          </div>

          <div className="inventory__centerRight">
            <div className="inventory__centerTop">
              <h1 className="inventory__centerHeading">NFT Inventory</h1>

              <span className="inventory__centerSubHeading">
                Last updated a few seconds ago
              </span>
            </div>

            <div className="inventory__centerMain">
              <h1 className="inventory__empty">
                We didn't find anything in your inventory...
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="inventory__footerWrapper">
        <div className="inventory__footer">
          <div className="inventory__selected">
            <FontAwesomeIcon icon={faHorse} />
            <span>NFT</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCoins} />
            <span>Tokens</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            <span>Transactions</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faRotate} />
            <span>Swap</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faChartLine} />
            <span>Activity</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGrip} />
            <span>App</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
