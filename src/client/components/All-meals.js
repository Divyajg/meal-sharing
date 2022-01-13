import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DataContext from "./DataContext";
import { Link } from "react-router-dom";

export default function Meals() {
  const { meals, loading, error } = useContext(DataContext);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <div className="centerAlign">
        <ol>
          {!meals || meals.length === 0 ? (
            <li>No Meals</li>
          ) : (
            meals.map((meal) => {
              return (
                <div className="mealBorder">
                  <li key={meal.id} className="boldFont">
                    {meal.title}{" "}
                  </li>
                  <li>{meal.description}</li>
                  <li>{meal.price} DKK</li>
                  <li>Event on: {meal.when_date.slice(0, 10)}</li>
                </div>
              );
            })
          )}
        </ol>
        <div>
          <p>
            Do you have an interesting meal to share? Click the button below
            to add your meal.
          </p>
          <Link to="/meals/addMeal">
            <button>Add your meal here</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}