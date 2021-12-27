import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DataContext from "./DataContext";
import { Link } from "react-router-dom";

export default function Meals() {
  const { newMeals, loading, error } = useContext(DataContext);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>{error}</p>;
 
  return (
    <div>
      <Header />

      <ol className="meals">
        {!newMeals || newMeals.length === 0 ? (
          <li>No Meals</li>
        ) : (
          newMeals.map((meal) => {
            return (
              <li key={meal.id}>
               <span className="underline">Meal: </span>
                {meal.title} <br />
                <span className="underline"> Meal Described:</span>{" "}
                {meal.description} <br />
                <span className="underline"> Meal Price: </span>
                {meal.price} <br />
                <span className="underline"> Available Seats: </span>
                {meal.availableSeats} <br />
                <Link to={`/meals/${meal.id}`}>
                  <button>Click to reserve this meal</button>{" "}
                </Link>
              </li>
            );
          })
        )}
      </ol>

      <Link to="/meals/addMeal">Add Meal Here</Link>
      <Footer />
    </div>
  );
}
