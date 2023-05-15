import React, { useState, useEffect } from "react";
import "./LandingPage.css";

export default function Header() {
  return (
    <section class="main" id="Home">
      <div class="border">
        <nav className="sticky">
          <a href="#" className="company-title">
            tourizto
          </a>
          <div class="nav-links">
            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About Us</a>
              </li>
              <li>
                <a href="#offers">Offers</a>
              </li>
              <li>
                <a href="#Locations">Destinations</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <a className="login">Login</a>
            <a className="register">Register</a>
          </div>
        </nav>
        <div class="main-text">
          <h1>Find Next Place To Visit</h1>
          <p>Discover Amazing Places At Exclusive Deals</p>
          <a href="#About" className="register discover">
            Discover More &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
