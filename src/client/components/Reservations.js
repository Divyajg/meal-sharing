import React, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DataContext from "./DataContext";

export default function Reservations() {
  const { reservations, loading, error } = useContext(DataContext);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>{error}</p>;

  const [inputState, setInputstate] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [email, setEmail] = useState("");
  const [mealId, setMealId] = useState("");
  const [date, setDate] = useState("");

  function newReservation() {
    if (email !== "") {
      setInputstate(true);
      fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact_name: name,
          contact_phonenumber: phoneNumber,
          contact_email: email,
          meal_id: mealId,
          number_of_guests: numberOfGuests,
          created_date: date,
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

  return (
    <div>
      <Header />
      <h4 className="padding">Please provide your reservation ID and a valid 🆔 proof. </h4>
      <div className="flex2">
        <div className="border">
          <p className="boldFont">Active reservations:</p>
          <ol>
            {!reservations || reservations.length === 0 ? (
              <li>No reservations</li>
            ) : (
              reservations.map((reservation) => {
                return (
                  <li key={reservation.id}>
                    <span>Reservation for:  </span>{" "}
                    {reservation.contact_name} 
                  </li>
                );
              })
            )}
          </ol>
        </div>
        <div className="border">
          <p className="boldFont">Reserve your meal and space here ⏬ </p>
          <div className="reserveInputForm">
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
                placeholder="Description"
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
              Meal Id:
              <input
                onChange={(e) => setMealId(e.target.value)}
                className="addMargin"
                type="text"
                defaultValue={""}
                placeholder="Your Choice of Meal"
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
                placeholder="Reservations"
                required
              />{" "}
            </label>{" "}
            <br />
            <label>
              Reserve On:{" "}
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
            <button onClick={newReservation}>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
