import React from "react";
import "./Search.css";
export default function Book() {
  return (
    <section className="book-form" id="book-form">
      <div className="seacrh-bar">
        <form className="form">
          <h3 className="search-tour">
            <span className="span-search">Search</span>
            <br></br>YOUR <span className="span-tour">TOURS</span>
          </h3>
          <div>
            <label>Destinations</label>
            <input
              type="text"
              placeholder="Where are you going?"
              className="input"
            />
          </div>
          <div>
            <label>Check in</label>
            <input type="date" className="input" />
          </div>
          <div>
            <label>Check Out</label>
            <input type="date" className="input" />
          </div>
          <div>
            <label>Guests</label>
            <input type="text" placeholder="Total number" className="input" />
          </div>
          <input type="submit" value="Search" className="log" />
        </form>
      </div>
    </section>
  );
}
