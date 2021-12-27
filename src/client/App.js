import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Meals from "./components/Meals";
import Reservations from "./components/Reservations";
import Reviews from "./components/Reviews";
import About from "./components/About";
import AddMeal from "./components/AddMeal";
import AddReview from "./components/AddReview";
import MealById from "./components/MealById";
import AutoSearch from "./components/AutoSearch";
import { ContextProvider } from "./components/DataContext";
import "./App.css";

function App() {
  return (
    <Router className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/meals" component={Meals} />
        <Route exact path="/reservations" component={Reservations} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/meals/addMeal" component={AddMeal} />
        <Route exact path="/reviews/addReview" component={AddReview} />
        <Route exact path="/meals/:id" component={MealById} />
        <Route exact path="/searchMeal" component={AutoSearch} />
        <ContextProvider>
          <Meals />
          <Reviews />
          <MealById />
        </ContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
