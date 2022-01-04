import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import DataContext from "./DataContext";

export default function MealById() {
  const { newMeals } = useContext(DataContext);
  const { id } = useParams();
  const [inputState, setInputstate] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [email, setEmail] = useState("");
  //const [date, setDate] = useState("");

  function newReservation() {
    {
      if (email !== "") {
        setInputstate(true);
        fetch("/api/reservations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contact_name: name,
            contact_phonenumber: phoneNumber,
            contact_email: email,
            meal_id: id,
            number_of_guests: numberOfGuests,
            //created_date: date,
          }),
        })
          .catch((e) => {
            setError(e);
            alert("please enter the Valid details");
          })
          .finally(() => {
            setInputstate(false);
            alert("Your Reservation has been saved. Enjoy the Experience.");
          });
      }
    }
  }
  const mealById = newMeals.find((meal) => meal.id === parseInt(id));
  console.log({mealById});
  return (
    <div>
      <Header />
      <div>
      <h1>Meal with id: {id}</h1>

     
        {!mealById ? (
          <h4>No Meals available</h4>
        ) : (
              <h4 key={mealById.id}  className="mealBorder">
               <span> Meal: </span>{mealById.title} <br />
               <span>Meal Described: </span>{mealById.description} <br />
               <span>Event on: {mealById.when_date} </span><br />
               <span>Meal Price: {mealById.price} </span><br />
               <span>Available Seats: {mealById.availableSeats} </span><br />
              </h4>
        )}
      
      <div className="inputForm">
        <label>
          Contact Name:{" "}
          <input
            onChange={(e) => setName(e.target.value)}
            className="addMargin"
            type="text"
            defaultValue={""}
            placeholder="Name"
            required
          />{" "}
        </label>{" "}
        <br />
        <label>
          Contact Number:{" "}
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="addMargin"
            type="int"
            defaultValue={""}
            placeholder="Phone number"
            required
          />{" "}
        </label>{" "}
        <br />
        <label>
          Contact Email:{" "}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="addMargin"
            type="text"
            defaultValue={""}
            placeholder="Email@domain.com"
            required
          />{" "}
        </label>{" "}
        <br />
        <label>
          Number Of Guests:
          <input
            onChange={(e) => setNumberOfGuests(e.target.value)}
            className="addMargin"
            type="int"
            defaultValue={""}
            placeholder="Max available"
            required
          />{" "}
        </label>{" "}
        <br />
        {/* <label>
          Reserve On:{" "}
          <input
            onChange={(e) => setDate(e.target.value)}
            className="addMargin"
            type="date"
            defaultValue={"yyyy-mm-dd"}
            placeholder="Date"
            required
          />{" "}
        </label> */}
        <br />
        <button onClick={newReservation}>Submit</button>
      </div>
      </div>
      <Footer />
    </div>
  );
}
