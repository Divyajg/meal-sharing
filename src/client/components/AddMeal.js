import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AddMeal() {
  const [inputState, setInputstate] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [When, setWhen] = useState("");
  const [reservations, setReservations] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  function newMeal() {
    {
      if (title !== "") {
        setInputstate(true);
        fetch("/api/meals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: title,
            description: description,
            location: location,
            When_date: When,
            max_reservations: reservations,
            price: price,
            created_date: date,
          }),
        })
          .catch((e) => {
            setError(e);
            alert("please enter the Valid details");
          })
          .finally(() => {
            setInputstate(false);
            alert("Meal Added");
          });
      }
    }
  }
  return (
    <div>
      <Header />
      <div className="inputForm">
        <label>
          Meal Title:{" "}
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
          Meal Description:{" "}
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
          Meal Location:{" "}
          <input
            onChange={(e) => setLocation(e.target.value)}
            className="addMargin"
            type="text"
            defaultValue={""}
            placeholder="Location"
            required
          />{" "}
        </label>{" "}
        <br />
        <label>
          When:{" "}
          <input
            onChange={(e) => setWhen(e.target.value)}
            className="addMargin"
            type="date"
            defaultValue={""}
            placeholder="When Date"
            required
          />{" "}
        </label>{" "}
        <br />
        <label>
          Maximum reservations:{" "}
          <input
            onChange={(e) => setReservations(e.target.value)}
            className="addMargin"
            type="number"
            defaultValue={""}
            placeholder="Reservations"
            required
          />{" "}
        </label>{" "}
        <br />
        <label>
          Meal Price:{" "}
          <input
            onChange={(e) => setPrice(e.target.value)}
            className="addMargin"
            type="number"
            defaultValue={""}
            placeholder="Price"
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
        <button className="button_add" onClick={newMeal}>
          {" "}
          Add Meal{" "}
        </button>
      </div>
      <Footer />
    </div>
  );
}