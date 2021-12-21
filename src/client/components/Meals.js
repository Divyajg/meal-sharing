import React, { useContext } from "react";
import DataContext, {ContextProvider} from "./DataContext"

export default function Meals() {
  const {meals, loading, error }=useContext(DataContext);
  console.log(meals, loading,error);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <header className="mealsHeader">
        <a href="/home">
      <img
          className="logo"
          src="https://i.pinimg.com/736x/ca/d9/11/cad911eca761152a9eb515b5de8ae115--logo-ms-awesome-logos.jpg"
          width="120px"
          height="100px"
          alt="MS-Logo"
        />
        </a>
        <h2>🥘 M S Special menu 🥘</h2>
      </header>
      
      <ol className="meals">
      {!meals || meals.length === 0 ? (
        <li>No Meals</li>
      ) : (
        meals.map((meal) => {
          return (
            <li key={meal.id}>
              {meal.title}
            </li>
            );
        })
      )}
    </ol>
    </div>
  );
}
