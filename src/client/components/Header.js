import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
return (
    <header>
        <div className="header">
        <Link to="/">
      <img
          className="logo"
          src="https://i.pinimg.com/736x/ca/d9/11/cad911eca761152a9eb515b5de8ae115--logo-ms-awesome-logos.jpg"
          width="120px"
          height="100px"
          alt="MS-Logo"
        />
        </Link>
        <h1 id="title">
          meal-sharing:{" "}
          <span id="caption">
            An exclusive place where food is an emotion.
          </span>
        </h1>
        </div>
        <hr className="style1" />
      </header>
      
)
}