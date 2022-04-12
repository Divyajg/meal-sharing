import React, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DataContext from "./DataContext";

export default function Reservations() {
  const { upcomingMeals, reservations, loading, error } =
    useContext(DataContext);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>{error}</p>;

  const [inputState, setInputstate] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [email, setEmail] = useState("");
  const [mealId, setMealId] = useState("");

  function newReservation() {
    
      setInputstate(!inputState);
      fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact_name: name,
          contact_phonenumber: phoneNumber,
          contact_email: email,
          meal_id: mealId,
          number_of_guests: numberOfGuests,
          created_date: new Date(),
        }),
      })
        .catch((event) => {
          setError(event);
          alert("please enter the Valid details");
        })
        .finally(() => {
          setInputstate(!inputState);
          alert("Your Reservation has been saved. Enjoy the Experience.");
        });
    
  }

  const upcomingReservations = reservations.filter((reservation) => {
    let temp = upcomingMeals.find((meal) => meal.id === reservation.meal_id);
    if (temp) {
      return reservation;
    }
  });
console.log({reservations});
console.log({upcomingReservations});
  return (
    <div>
      <Header />
      <h4>
        Please provide your reservation ID and a valid 🆔 proof on Event.
      </h4>
      
        
        <div className="mealBorder">
          <p className="boldFont centerAlign">
            Reserve your meal and space here ⏬
          </p>
          <div className="inputForm">
            <form>
            <input
              onChange={(e) => setName(e.target.value)}
              className="addMargin"
              type="text"
              defaultValue={""}
              placeholder="Name"
              required
            />
            <br />
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="addMargin"
              type="int"
              defaultValue={""}
              placeholder="Phone"
              required
            />
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="addMargin"
              type="text"
              defaultValue={""}
              placeholder="Email@domain.com"
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
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="addMargin"
              type="int"
              defaultValue="1"
              placeholder="Number Of Guests"
              required
            />
            <br />
            <button type="submit" className="centerAlign">
              Submit
            </button>
            </form>
          </div>
        </div>
     
      <Footer />
    </div>
  );
}
