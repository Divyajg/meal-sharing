import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";


export default function ReviewById() {
    const { id } = useParams();
    const [inputState, setInputstate] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [stars, setStars] = useState("");
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
              meal_id: id,
              stars: stars,
              created_date: new Date(),
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
          <button onClick={newReview}>Submit</button>
        </div>
        <Footer />
      </div>
    );
  }