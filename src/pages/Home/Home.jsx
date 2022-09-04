import React, { useState } from "react";

import Blockchain from "./Blockchain";

import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-regular-svg-icons";

import "./Home.css";

const Home = () => {
  const [selectedBlockChain, setSelectedBlockChain] = useState("");

  return (
    <div className="home">
      <div>
        <div className="home__header">
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>

        <div className="home__topWrapper">
          <div className="home__top">
            <h1 className="home__topHeading">Hi, Welcome to Labz</h1>

            <h1 className="home__topSubheading">Let's get started</h1>

            <p className="home__topPara">
              Since you have no wallets in <span>Labz</span> yet, choose your
              favourite blockchain. Then, create a new wallet or import an
              existing one.
            </p>
          </div>
        </div>

        <div
          className={`home__bottom ${selectedBlockChain ? "" : "show-bottom"}`}
        >
          <button
            className="home__blockchain"
            onClick={(e) => setSelectedBlockChain(e.target.textContent)}
          >
            Bitcoin
          </button>

          <button
            className="home__blockchain"
            onClick={(e) => setSelectedBlockChain(e.target.textContent)}
          >
            Ethereum
          </button>

          <button
            className="home__blockchain"
            onClick={(e) => setSelectedBlockChain(e.target.textContent)}
          >
            VeChain
          </button>

          <button
            className="home__blockchain"
            onClick={(e) => setSelectedBlockChain(e.target.textContent)}
          >
            Litecoin
          </button>

          <button
            className="home__blockchain"
            onClick={(e) => setSelectedBlockChain(e.target.textContent)}
          >
            GoChain
          </button>

          <button
            className="home__blockchain"
            onClick={(e) => setSelectedBlockChain(e.target.textContent)}
          >
            Æternity
          </button>

          <button
            className="home__blockchain"
            onClick={(e) => setSelectedBlockChain(e.target.textContent)}
          >
            Neo
          </button>
        </div>

        <Blockchain
          setSelectedBlockChain={setSelectedBlockChain}
          blockchain={selectedBlockChain}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
