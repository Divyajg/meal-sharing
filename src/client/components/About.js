import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function About() {
  return (
    <>
      <Header />
      <div className="flex1">
        <div className="flex2">
          <div className="border">
            <h2 id="aboutUs">
              <a>About Us</a>
            </h2>
            <p>
              Our History, Values In Action, Leadership Team, Investor
              Relations, News andp//#endregion Notifications, Franchise Info.
            </p>
          </div>
          <div className="border">
            <h2 id="careers">
              <a>Careers</a>
            </h2>
            <p>Education, Opportunities, Employee Perks, Working With Us.</p>
          </div>
        </div>
        <div className="flex2">
          <div className="border">
            <h2 id="services">
              <a>Services</a>
            </h2>
            <p>
              Wifi, Gift Cards, Play Areas For Children, Party Specials, Online
              Reservation, Family Fun, Rewards.
            </p>
          </div>
          <div className="border">
            <h2 id="community">
              <a>Community</a>
            </h2>

            <p>Scholorships M S Charities Community Info MS International</p>
          </div>
        </div>
        <div className="flex2">
          <div className="border">
            <h2 id="contact">
              <a>Contact Us</a>
            </h2>
            <p>
              Gift Card FAQs Donations Employment Restaurant Feedback Frequently
              Asked Questions
            </p>
          </div>
          <div className="border">
            <h2 id="accessibility">
              <a>Accessibility</a>
            </h2>
            <p>
              is nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu.
            </p>
          </div>
        </div>
        <div className="flex2">
          <div className="border">
            <h2 id="privacy">
              <a>Privacy</a>
            </h2>
            <p>
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
          <div className="border">
            <h2 id="terms">
              <a>Terms & Condotions</a>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="flex2">
          <div className="border">
            <h2 id="personalInfo">
              <a>Do Not Sell My Personal Information</a>
            </h2>
            <p>
              is nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu.
            </p>
          </div>
          <div className="border">
            <h2 id="cookie">
              <a>Cookie Settings</a>
            </h2>
            <p>
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
        </div>
        <div className="flex2">
          <div className="border">
            <h2 id="contact">
              <a>Contact US</a>
            </h2>
            <p>Phone: +10 52146325</p>
            <p>Email: meal_sharing@dj.com</p>
            <p>Address: Lille Elmevej 43 <br/> Valby-2400 </p>
          </div>
          <div className="border">
            <h2 id="location">
              <a>Location</a>
            </h2>
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.5585590873193!2d12.538587315897269!3d55.6618865805291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652539aed46bb31%3A0x352c940085c22f73!2sDISIE%20(Danish%20Institute%20for%20Sustainable%20Innovation%20%26%20Entrepreneurship)!5e0!3m2!1sen!2sdk!4v1623308449324!5m2!1sen!2sdk"
                title="hyf-location"
                loading="lazy"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
