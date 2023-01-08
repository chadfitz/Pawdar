import React from "react";
import { Switch, Route } from "react-router-dom";
import Hero from "./store/components/Hero/HeroIndex";
import Navigation from "./store/components/Navigation";
import NotFound from "./store/components/NotFound/NotFoundIndex";
import AnimalIndex from "./store/components/Animal/AnimalIndex";
import AnimalShow from "./store/components/Animal/AnimalShow";
import ProfilePage from "./store/components/ProfilePage/ProfilePageIndex";
import OrganizationIndex from "./store/components/Organization/OrganizationIndex";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <Hero />
            <AnimalIndex />
          </Route>
          <Route exact path="/user/profile" component={ProfilePage} />
          <Route exact path="/animals/:animalId" component={AnimalShow} />
          <Route exact path="/organizations" component={OrganizationIndex} />
          <Route component={NotFound} />
        </Switch>
    </>
  );
}

export default App;