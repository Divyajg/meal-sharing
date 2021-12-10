import React, { useState, useEffect } from "react";

const DataContext = React.createContext();

function ContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mealsUrl = "/api/meals";
    setLoading(true);
    fetch(mealsUrl)
      .then((response) => response.json())
      .then((result) => {
          setMeals(result)
          console.log(result);
        })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

 

  return (
    <DataContext.Provider value={{ meals, loading, error }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
export { ContextProvider };
/* const fetchMeals = async () => {
    try {
      //`/api/meals?title=${userInput}`
      await fetch("/api/meals")
        .then((response) => {
          if (!response.ok) {
            throw Error("cannot fetch the data from API");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setMeals(data);
          setLoading(false);
          console.log(data);
        });
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    if (error) {
      setLoading(false);
    } else {
      setLoading(true);
      fetchMeals();
    }
  }, [error]);
  console.log(meals); */
