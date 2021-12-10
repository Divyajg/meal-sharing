import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Meals from "./components/Meals";
import Reservations from "./components/Reservations";
import Reviews from "./components/Reviews";
import About from "./components/About";
import { ContextProvider } from "./components/DataContext";
import "./App.css";

function App() {
  return (
    <Router className="app">
      <Switch>
        <Route exact path="/meal-sharing" component={HomePage} />
        <Route exact path="/meal-sharing/about" component={About} />
        <Route exact path="/meal-sharing/meals" component={Meals} />
        <Route
          exact
          path="/meal-sharing/reservations"
          component={Reservations}
        />
        <Route exact path="/meal-sharing/reviews" component={Reviews} />
        <ContextProvider>
          <Meals />
        </ContextProvider>
      </Switch>
    </Router>
    
  );
}

export default App;
