import React, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AddReview() {
  const [inputState, setInputstate] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mealId, setMealId] = useState("");
  const [stars, setStars] = useState("");
  const [date, setDate] = useState("");
  function newReview() {
    {
      if (title !== "") {
        setInputstate(true);
        fetch("/api/reviews", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: title,
            description: description,
            meal_id: mealId,
            stars: stars,
            created_date: date,
          }),
        })
          .catch((e) => {
            setError(e);
            alert("please enter the required details");
          })
          .finally(() => {
            setInputstate(false);
            alert("Thank you for the Review.");
          });
      }
    }
  }

  return (
    <div>
      <Header />
      <div className="inputForm">
        <label>
          Title:{" "}
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="addMargin"
            type="text"
            defaultValue={""}
            placeholder="Title"
            required
          />{" "}
        </label>{" "}
        <br />
        <label>
          Description:{" "}
          <input
            onChange={(e) => setDescription(e.target.value)}
            className="addMargin"
            type="textarea"
            defaultValue={""}
            placeholder="Description"
            required
          />{" "}
        </label>{" "}
        <br />
        <label>
          Meal ID:{" "}
          <input
            onChange={(e) => setMealId(e.target.value)}
            className="addMargin"
            type="text"
            defaultValue={""}
            placeholder="meal id"
            required
          />{" "}
        </label>{" "}
        <br />
        <label>
          Stars:
          <input
            onChange={(e) => setStars(e.target.value)}
            className="addMargin"
            type="number"
            defaultValue={""}
            placeholder="stars out of 5"
            required
          />{" "}
        </label>{" "}
        <br />
        <label>
          Created Date:{" "}
          <input
            onChange={(e) => setDate(e.target.value)}
            className="addMargin"
            type="date"
            defaultValue={"yyyy-mm-dd"}
            placeholder="Date"
            required
          />{" "}
        </label>
        <br />
        <button onClick={newReview}>Submit</button>
      </div>
      <Footer />
    </div>
  );
}
