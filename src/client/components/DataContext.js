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
