import React from "react";
export default function About() {
    function search(){
<h1>search here!</h1>
    }
  return (
      <>
      <button onClick={search}>🔍Search</button>
      <h2 id="search"><a href={search()}>Search</a></h2>
      <h2 id="aboutUs"><a>About Us</a></h2>
      <h2 id="careers"><a>Careers</a></h2>
      <h2 id="services"><a>Services</a></h2>
      <h2 id="community"> <a>Community</a></h2>
      <h2 id="accessibility"><a>Accessibility</a></h2>
      <h2 id="privacy"><a>Privacy</a></h2>
      <h2 id="terms"><a>Terms & Condotions</a></h2>
      <h2 id="personalInfo"><a>Do Not Sell My Personal Information</a></h2>
      <h2 id="cookie"><a>Cookie Settings</a></h2>
      <h2 id="contact"><a>Contact US</a></h2>
      <h2 id="location"><a>Location</a></h2>
      
      </>
  );
}
