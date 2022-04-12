import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import DataContext from "./DataContext";
import { Link } from "react-router-dom";

export default function MealById() {
  const { newMeals, reviews } = useContext(DataContext);
  const { id } = useParams();
  const [inputState, setInputstate] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [email, setEmail] = useState("");

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
  const reviewsById = reviews.filter(
    (review) => review.meal_id === parseInt(id)
  );
  function reviewStars(stars) {
    if (parseInt(stars) === 1) {
      return <span>⭐</span>;
    } else if (parseInt(stars) === 2) {
      return <span>⭐⭐</span>;
    } else if (parseInt(stars) === 3) {
      return <span>⭐⭐⭐</span>;
    } else if (parseInt(stars) === 4) {
      return <span>⭐⭐⭐⭐</span>;
    } else if (parseInt(stars) === 5) {
      return <span>⭐⭐⭐⭐⭐</span>;
    }
  }
  return (
    <div>
      <Header />
      <div>
        {!mealById ? (
          <h4>No Meals available</h4>
        ) : (
          <p key={mealById.id} className="mealBorder">
            <span className="boldFont">{mealById.title} </span> <br />
            {mealById.description} <br />
            Event On {mealById.when_date} <br />
            {mealById.price} DKK <br />
            Available {mealById.availableSeats} <br />
          </p>
        )}
<div className="flex2">
        <ol className="centerAlign border">
          {reviewsById.length === 0 ? (
            <li className="boldFont">
              Be the first one to Review{" "}
              <Link to={`/reviews/${id}`}>
                      <button>Add Review</button>
                    </Link>
            </li>
          ) : (
            <div>
              <h4>Reviews</h4>
              {reviewsById.map((review) => {
                return (
                  <li key={review.id}>
                    <span className="boldFont"> {review.stars}</span>{" "}
                    {reviewStars(review.stars)} <br />
                    {review.title} <br />
                    {review.description} <br />
                  </li>
                );
              })}
            </div>
          )}
        </ol>

        <div className="inputForm border">
          
            <input
              onChange={(e) => setName(e.target.value)}
              className="addMargin"
              type="text"
              defaultValue={""}
              placeholder="Name"
              required
            />{" "}
          
          <br />
          
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="addMargin"
              type="int"
              defaultValue={""}
              placeholder="Phone number"
              required
            />{" "}
          
          <br />
          
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="addMargin"
              type="text"
              defaultValue={""}
              placeholder="Email@domain.com"
              required
            />{" "}
          
          <br />
          
            <input
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="addMargin"
              type="int"
              defaultValue={""}
              maxLength={mealById.availableSeats}
              placeholder="Number Of Guests"
              required
            />{" "}
         
          <br />
          <button onClick={newReservation}>Submit</button>
        </div>

      
      
        </div>
        </div>
      <Footer />
    </div>
  );
}
