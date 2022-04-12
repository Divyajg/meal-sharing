import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./componentStyle.css";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div className="homePage">
      <Header />
        
      <h3 id="caption">
            An exclusive place where food is an emotion.
          </h3>

      <section>
        <img
          src="https://parkhouse.com.au/wp-content/uploads/sites/6/2018/03/Hero-PHFL-Food-Merchants-House-Feast-e1557365216691.jpg"
          alt="FoodLove😋"
          width="100%"
          height="49%"
        />
        <p className="text">
          Meal-sharing is an application, where one can find the meals that are
          available to enjoy, find the reservations about the availability, can
          look into the experience of others through reviews, make reservations
          to that particular menu found interesting from the meals and also can
          write about their experience.
        </p>
      </section>

      <div className="aboutPage">
        <ul className="listBlock">
          <li className="title">
          <Link to="/about">about us</Link>
          </li>
          <li>our history</li>
          <li>news & notifications</li>
          <li>franchise info</li>
        </ul>
        
        <ul className="listBlock">
          <li className="title">
          <Link to="/about">services</Link>
          </li>
          <li>wifi</li>
          <li>gift cards</li>
          <li>Play areas for children</li>
          <li>Party specials</li>
          <li>online reservation</li>
          <li>family fun</li>
          <li>rewards</li>
        </ul>
        <ul className="listBlock">
          <li className="title">
          <Link to="/about">community</Link>
          </li>
          <li>scholorships</li>
          <li>m s charities</li>
          <li>community info</li>
          <li>MS international</li>
        </ul>
        <ul className="listBlock">
          <li className="title">
          <Link to="/about">contact us</Link>
          </li>
          <li>Gift Card FAQs</li>
          <li>Donations</li>
          <li>Employment</li>
          <li>Feedback</li>
          <li>Frequently Asked Questions</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;