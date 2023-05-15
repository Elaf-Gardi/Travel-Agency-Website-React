import React from "react";
import "./NewsLetter.css";

export default function News() {
  return (
    <section className="news-letter">
      <div className="news-text">
        <h2>Newsletter</h2>
        <p>
          Subscribe for more updates of new Offers, Discount <br></br>and
          Destinations
        </p>
      </div>
      <div className="send">
        <form>
          <input type="email" placeholder="Write your email" required></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    </section>
  );
}
