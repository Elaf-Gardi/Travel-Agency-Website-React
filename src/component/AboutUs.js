import React from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="About" id="About">
      <div className="about-title">
        <h5>Our Story</h5>
        <h3>About Us</h3>
      </div>
      <div className="timeline">
        <div className="container left-container">
          <FontAwesomeIcon icon={faCircle} className="circle" />
          <div className="text-box">
            <h2>Founders</h2>
            <small>2000 - 2001</small>
            <p>tourzito funded by Victoria O'Neill and Lily Evans.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="container right-container">
          <FontAwesomeIcon icon={faCircle} className="circle" />
          <div className="text-box">
            <h2>Our Start</h2>
            <small>2001 - 2002</small>
            <p>
              First Tour toke a place to the Caribbean islands. in the summer of
              2001.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="container left-container">
          <FontAwesomeIcon icon={faCircle} className="circle" />
          <div className="text-box">
            <h2>Our Vision</h2>
            <small>2023 - 2027</small>
            <p>
              Our vision for the next 5 years is to travel over 100 different
              destinations.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="container right-container">
          <FontAwesomeIcon icon={faCircle} className="circle" />
          <div className="text-box">
            <h2>Our Partners</h2>
            <small>2023 - 2022</small>
            <p>StarTravel, OCEANS, Trvco, Trivagoo and HotSummeR.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
