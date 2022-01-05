import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/Logo.png"

export default function Header(){
return (
    <header>
        <div className="header">
        <Link to="/">
      <img
          className="logo"
          src={logo}
          width="120px"
          height="100px"
          alt="MS-Logo"
        />
        </Link>
        <h1 id="title">
          meal-sharing{" "}
          <span id="caption">
            An exclusive place where food is an emotion.
          </span>
        </h1>
        </div>
        <hr className="style1" />
      </header>
      
)
}