import React, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DataContext from "./DataContext";

export default function AddReview() {
  const { upcomingMeals } = useContext(DataContext);
  const [inputState, setInputstate] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mealId, setMealId] = useState("");
  const [stars, setStars] = useState("");
  function newReview() {
    setInputstate(!inputState);
    fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        meal_id: mealId,
        stars: stars,
        created_date: new Date(),
      }),
    })
      .catch((e) => {
        setError(e);
        alert("please enter the Valid details");
      })
      .finally(() => {
        setInputstate(!inputState);
        alert("Thank you for your review");
      });
  }

  return (
    <div>
      <Header />
      <p id="inputResult"></p>
      <div className="inputForm">
        <form onSubmit={newReview}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="addMargin"
            type="text"
            defaultValue={""}
            placeholder="Title"
            required
          />
          <br />

          <input
            onChange={(e) => setDescription(e.target.value)}
            className="addMargin"
            type="textarea"
            defaultValue={""}
            placeholder="Description"
            required
          />

          <br />
          <select name={mealId} className="addMargin">
            {upcomingMeals.map((meal) => (
              <option key={meal.id} value={meal.id}>
                {meal.title}
              </option>
            ))}
          </select>
          <br />

          <input
            onChange={(e) => setStars(e.target.value)}
            className="addMargin"
            type="number"
            defaultValue={""}
            placeholder="stars out of 5"
            required
          />

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
