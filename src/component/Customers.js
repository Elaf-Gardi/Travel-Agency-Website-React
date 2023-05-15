import React from "react";
import "./Customers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import img from "../img/kai.jpg";
import img1 from "../img/baekhyun.jpg";
import img2 from "../img/lay.jpg";

export default function Customers() {
  return (
    <section className="customer">
      <div className="cutomer-title">
        <h5>Thoughts</h5>
        <h3>Customers Reviews</h3>
      </div>
      <div className="wrapper">
        <div className="rev-container">
          <div className="profile">
            <div className="profile-img">
              <img src={img} alt="cutomer photo" />
            </div>
            <h2>KAI</h2>
          </div>
          <p>
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} className="left" />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <span>
              <FontAwesomeIcon icon={faQuoteRight} className="right" />
            </span>
          </p>
        </div>
        <div className="rev-container">
          <div className="profile">
            <div className="profile-img">
              <img src={img1} alt="cutomer photo" />
            </div>
            <h2>BAEKHYUN</h2>
          </div>
          <p>
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} className="left" />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <span>
              <FontAwesomeIcon icon={faQuoteRight} className="right" />
            </span>
          </p>
        </div>
        <div className="rev-container">
          <div className="profile">
            <div className="profile-img">
              <img src={img2} alt="cutomer photo" />
            </div>
            <h2>LAY</h2>
          </div>
          <p>
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} className="left" />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <span>
              <FontAwesomeIcon icon={faQuoteRight} className="right" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
