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
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/meals" component={Meals} />
        <Route
          exact
          path="/reservations"
          component={Reservations}
        />
        <Route exact path="/reviews" component={Reviews} />
        <ContextProvider>
          <Meals />
        </ContextProvider>
      </Switch>
    </Router>
    
  );
}

export default App;
