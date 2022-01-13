import React, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DataContext from "./DataContext";
import { Link } from "react-router-dom";

export default function Reviews() {
  const { meals, reviews, loading, error } = useContext(DataContext);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>{error}</p>;

  function reviewStars(stars){
    if(parseInt(stars)===1){return (<span>⭐</span>)}
    else if(parseInt(stars)===2){return (<span>⭐⭐</span>)}
    else if(parseInt(stars)===3){ return (<span>⭐⭐⭐</span>)}
    else if(parseInt(stars)===4){return (<span>⭐⭐⭐⭐</span>)}
    else if(parseInt(stars)===5){return (<span>⭐⭐⭐⭐⭐</span>)}
  }

  const reviewsWithMealTitle = reviews.map((review)=>{
    let temp = meals.find(meal=> meal.id === review.meal_id)
    if(temp) {
     review.meal_title=temp.title;
    }
    return review;
  }) 
  return (
    <div>
      <Header />
<div className="centerAlign">
      <h2>Reviews</h2>
      <ol className="mealBorder">
        {!reviewsWithMealTitle || reviewsWithMealTitle.length === 0 ? (
          <li>No reviews</li>
        ) : (
          reviewsWithMealTitle.map((review) => {
            return (
              <li key={review.id}>
                <span className="boldFont">{review.meal_title} </span>  <br />
                <span className="boldFont"> {review.stars}</span> {reviewStars(review.stars)}  <br />
                <span className="boldFont">Title: </span>{review.title} <br />
                <span className="boldFont">Description: </span>{review.description}<br />
                <span className="boldFont">Reviewed on: </span>{review.created_date.slice(0,10)}
              </li>
            );
          })
        )}
      </ol>
      <Link to="/reviews/addReview">
            <button>Add Your Review</button>
          </Link>
          </div>
      <Footer />
    </div>
  );
}
