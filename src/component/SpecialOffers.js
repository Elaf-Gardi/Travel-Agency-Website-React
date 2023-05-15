/*Didn't use this file to the end project*/
import React, { useState } from "react";
import "./SpecialOffers.css";

export default function Offers() {
  const [cards] = useState([
    {
      title: "Weekly Flash Deals",
      text: "up to 30% off",
      button: "View Deals",
      buttonColor: "#149c90",
    },
    {
      title: "Summer Escapes",
      text: "Plan your next trip",
      button: "Learn More",
      buttonColor: "#149c90",
    },
    {
      title: "Exclusive Deals",
      text: "Want to save up to 50%",
      button: "Subscribe Us",
      buttonColor: "#149c90",
    },
  ]);
  return (
    <section className="offers" id="offers">
      <div className="offers-container">
        <div className="content-container">
          <h5>Don't miss</h5>
          <h3>Special Offers</h3>
        </div>

        <div className="cards">
          {cards.map((card, i) => (
            <div key={i} className="card">
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <button /*style={{ backgroundColor: card.buttonColor }}*/>
                {card.button} &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
