import React from "react";
import { Switch, Route } from "react-router-dom";
import Hero from "./store/components/Hero/HeroIndex";
import Navigation from "./store/components/Navigation";
import NotFound from "./store/components/NotFound/NotFoundIndex";
import AnimalIndex from "./store/components/Animal/AnimalIndex";
import AnimalShow from "./store/components/Animal/AnimalShow";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/animals" component={AnimalIndex} />
          {/* <Route exact path="/api/organizations/:organizationId/animals/:animalId" component={AnimalShow} /> */}
          <Route exact path="/animals/:animalId" component={AnimalShow} />

          <Route component={NotFound} />
        </Switch>
    </>
  );
}

export default App;