import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const AutoSearch = () => {
    const [data, setData]=useState([])
  async function search(key) {
    let result = await fetch("/api/meals/?title=" + key);
    result=await result.json();
    setData(result);
  }

  return (
    <div>
      <Header />
      <div>
        <h1>Search Your Meal Here</h1>
        <br />
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          placeholder="Search meal by name"
        />

<ol className="meals">
        {!data || data.length === 0 ? (
          <li>No Meals</li>
        ) : (
          data.map((meal) => {
            return (
              <li key={meal.id}>
                <span className="underline">Meal: </span>{meal.title} <br />
                <span className="underline"> Meal Price: </span>{meal.price} <br />
                <Link to={`/meals/${meal.id}`}>
                <button>
                  Explore this meal 🥗
                </button> </Link>
              </li>
            );
          })
        )}
      </ol>
      </div>
      <Footer />
    </div>
  );
};

export default AutoSearch;
