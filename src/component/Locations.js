import React from "react";
import "./Locations.css";
import img1 from "../img/Canda.jpg";
import img2 from "../img/greece.jpg";
import img3 from "../img/India.jpg";
import img4 from "../img/Japan.jpg";
import img5 from "../img/spain.jpg";
import img6 from "../img/Maldives.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  return (
    <section className="locations" id="Locations">
      <div className="loc-title">
        <h5>What's New</h5>
        <h3>Destinations</h3>
      </div>
      <div className="Location-parent">
        <div className="box">
          <div className="box-img">
            <img src={img1} alt="pic of Canda" />
          </div>
          <div className="box-content">
            <h4>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              Logan Mountain
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <span className="rate">5</span>
            </div>
            <div className="price">
              $250.00
              <span>$500.00</span>
            </div>
            <a className="btn">Book Now</a>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={img2} alt="pic of greece" />
          </div>
          <div className="box-content">
            <h4>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              Greece
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <span className="rate">5</span>
            </div>
            <div className="price">
              $200.00
              <span>$400.00</span>
            </div>
            <a className="btn">Book Now</a>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={img3} alt="pic of India" />
          </div>
          <div className="box-content">
            <h4>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              Taj Mahal
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <span className="rate">5</span>
            </div>
            <div className="price">
              $250.00
              <span>$350.00</span>
            </div>
            <a className="btn">Book Now</a>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={img4} alt="pic of Japan" />
          </div>
          <div className="box-content">
            <h4>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              Japan
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <span className="rate">5</span>
            </div>
            <div className="price">
              $80.00
              <span>$300.00</span>
            </div>
            <a className="btn">Book Now</a>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={img5} alt="pic of spain" />
          </div>
          <div className="box-content">
            <h4>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              Spain
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <span className="rate">5</span>
            </div>
            <div className="price">
              $120.00
              <span>$400.00</span>
            </div>
            <a className="btn">Book Now</a>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={img6} alt="pic of Maldives" />
          </div>
          <div className="box-content">
            <h4>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              Maldives
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="reviews">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <span className="rate">5</span>
            </div>
            <div className="price">
              $100.00
              <span>$500.00</span>
            </div>
            <a className="btn">Book Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
