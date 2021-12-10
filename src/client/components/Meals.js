import React, { useContext } from "react";
import DataContext, {ContextProvider} from "./DataContext"

export default function Meals() {
  const {meals, loading, error }=useContext(DataContext);
  console.log(meals, loading,error);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h2>Meals</h2>
      <ul>
      {!meals || meals.length === 0 ? (
        <li>No Meals</li>
      ) : (
        meals.map((meal) => {
          return (
            <li key={meal.id}>
              {console.log(meal)}
            </li>
            );
        })
      )}
    </ul>
    </div>
  );
}
