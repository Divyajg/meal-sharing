import React, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DataContext from "./DataContext";
import { Link } from "react-router-dom";

export default function Reviews() {
  const { reviews, loading, error } = useContext(DataContext);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <h2>Reviews</h2>

      <ol className="mealBorder">
        {!reviews || reviews.length === 0 ? (
          <li>No reviews</li>
        ) : (
          reviews.map((review) => {
            return (
              <li key={review.id}>
                <span className="underline boldFont">Meal ID: </span> {review.meal_id} <br />
                <span className="underline">Stars: </span>{review.stars} <br />
                <span className="underline">Title: </span>{review.title} <br />
                <span className="underline">Description: </span>{review.description}
              </li>
            );
          })
        )}
      </ol>
      <Link to="/reviews/addReview">
            <button>Add a review Here</button>
          </Link>

      <Footer />
    </div>
  );
}
