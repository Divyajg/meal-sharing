import React, { useState, useEffect } from "react";

const DataContext = React.createContext();

function ContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [availableReservations, setAvailableReservations]  = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const mealsUrl = "/api/meals";
    setLoading(true);
    fetch("api/meals?availableReservations")
      .then((response) => response.json())
      .then((result) => setAvailableReservations(result))
      .catch((e) => setError(e));
    fetch(mealsUrl)
      .then((response) => response.json())
      .then((result) => setMeals(result))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const reviewsUrl = "/api/reviews";
    setLoading(true);
    fetch(reviewsUrl)
      .then((response) => response.json())
      .then((result) => setReviews(result))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const reservationsUrl = "/api/reservations";
    setLoading(true);
    fetch(reservationsUrl)
      .then((response) => response.json())
      .then((result) => setReservations(result))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  const newMeals = meals.map((meal)=>{
    let temp = availableReservations.find(reservation=> reservation.id === meal.id)
    if(temp) {
      meal.reservations=temp.reservations;
      meal.availableSeats = meal.max_reservations-meal.reservations;
    }
    return meal;
  }) 
console.log(newMeals);
console.log(availableReservations);
  return (
    <DataContext.Provider
      value={{
        meals,
        newMeals,
        reviews,
        reservations,
        availableReservations,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
export { ContextProvider };
