import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="contact" id="Contact">
      <div className="footer">
        <div className="main-footer">
          <div className="list">
            <h4>Qiuck Links</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Tour</a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Tour</a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <a href="#">31 West 20th Street</a>
              </li>
              <li>
                <a href="#">New York NY 10016</a>
              </li>
              <li>
                <a href="#">+1(123)-456-7890</a>
              </li>
              <li>
                <a href="#">info@tourzito.com</a>
              </li>
              <li>
                <a href="#">+1(123)-456-7890</a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h4>connect</h4>
            <div className="Social">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="end-text">
        <p>Copyright @2023 All rights reserved | Made with by Elaf Gardi. </p>
      </div>
    </section>
  );
}
