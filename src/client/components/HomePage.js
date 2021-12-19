import React from "react";
import "./componentStyle.css";


export default function HomePage(props) {
  return (
    <div className="homePage">
      <header>
        <img
          className="logo"
          src="https://i.pinimg.com/736x/ca/d9/11/cad911eca761152a9eb515b5de8ae115--logo-ms-awesome-logos.jpg"
          width="120px"
          height="100px"
          alt="MS-Logo"
        />

        <nav>
          <ul>
            <li className="upperCase">
              <a href="meal-sharing/about">about</a>
            </li>
            <li className="upperCase">
              <a href="meal-sharing/meals">our menu</a>
            </li>
            <li className="upperCase">
              <a href="meal-sharing/reservations">reserve here</a>
            </li>
            <li className="upperCase">
              <a href="meal-sharing/reviews">reviews</a>
            </li>
            <li className="upperCase">
              <a href="meal-sharing/about">locate</a>
            </li>
            <li className="upperCase">
              <a href="meal-sharing/about/">🔍search</a>
            </li>
          </ul>
        </nav>
      </header>
      <hr className="style1" />

      <section>
        <h1 id="title">
          meal-sharing:{" "}
          <span id="caption">
            An exclusive place where food is our emotion.
          </span>
        </h1>
        <img
          src="https://www.stephenconroy.com/images/GALLERYVIEW_575_MissSaigon_Hero_web.jpg"
          alt="FoodLove😋"
          width="1150px"
          height="500px"
        />
        <p>
          Meal-sharing is an application, where one can find the meals that are
          available to enjoy, find the reservations about the availability, can
          look into the experience of others through reviews, make reservations
          to that particular menu found interesting from the meals and also can
          write about their experience.
        </p>
      </section>

      <div className="aboutPage">
        <ul>
          <li>
            <a href="meal-sharing/about/">about us</a>
          </li>
          <li>our history</li>
          <li>values in action</li>
          <li>leadership team</li>
          <li>investor relations</li>
          <li>news & notifications</li>
          <li>franchise info</li>
        </ul>
        <ul>
          <li>
            <a href="meal-sharing/about/">careers</a>
          </li>
          <li>Education Opportunities</li>
          <li>employee perks</li>
          <li>working with us</li>
        </ul>
        <ul>
          <li>
            <a href="meal-sharing/about/">services</a>
          </li>
          <li>wifi</li>
          <li>gift cards</li>
          <li>Play areas for children</li>
          <li>Party specials</li>
          <li>online reservation</li>
          <li>family fun</li>
          <li>rewards</li>
        </ul>
        <ul>
          <li>
            <a href="meal-sharing/about/">community</a>
          </li>
          <li>scholorships</li>
          <li>m s charities</li>
          <li>community info</li>
          <li>MS international</li>
        </ul>
        <ul>
          <li>
            <a href="meal-sharing/about/">contact us</a>
          </li>
          <li>Gift Card FAQs</li>
          <li>Donations</li>
          <li>Employment</li>
          <li>Restaurant Feedback</li>
          <li>Frequently Asked Questions</li>
        </ul>
      </div>
      <footer>
        <div className="socialMedia">
          <ul>
            <li>
              <a href="https://facebook.com/meal-sharing_dj">
                <img
                  src="https://img.icons8.com/fluency/50/000000/facebook.png"
                  alt="facebook!"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/meal-sharing_dj">
                <img
                  src="https://img.icons8.com/color/50/000000/twitter-squared.png"
                  alt="twitter!"
                />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/meal-sharing_dj">
                <img
                  src="https://img.icons8.com/fluency/50/000000/instagram-new.png"
                  alt="instagram!"
                />
              </a>
            </li>
            <li>
              <a href="https://yahoo.com/meal-sharing_dj">
                <img
                  src="https://img.icons8.com/doodle/48/000000/yahoo--v1.png"
                  alt="yahoo!"
                />
              </a>
            </li>
            <li>
              <a href="https://google.com/meal-sharing_dj">
                <img
                  src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                  alt="google!"
                />
              </a>
            </li>
          </ul>
        </div>
        <hr className="style2" />
        <ul>
          <li className="capitalize">
            <a href="meal-sharing/about">accessibility</a>
          </li>
          <li className="capitalize">
            <a href="meal-sharing/about">privacy</a>
          </li>
          <li className="capitalize">
            <a href="meal-sharing/about">terms & onditions</a>
          </li>
          <li className="capitalize">
            <a href="meal-sharing/about">do not sell my personal information</a>
          </li>
          <li className="capitalize">
            <a href="meal-sharing/about">cookie settings</a>
          </li>
          <li className="capitalize">@copyRights.meal_sharing_dj</li>
        </ul>
      </footer>
    </div>
  );
}
