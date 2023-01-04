import React from "react";
import { Switch, Route } from "react-router-dom";
import Hero from "./store/components/Hero/HeroIndex";
import Navigation from "./store/components/Navigation";
import NotFound from "./store/components/NotFound/NotFoundIndex";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/api/animals">

          </Route>
          <Route component={NotFound} />
        </Switch>
    </>
  );
}

export default App;