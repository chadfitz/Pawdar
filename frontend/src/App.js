import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./store/components/Navigation";
import NotFound from "./store/components/NotFound/NotFoundIndex";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route component={NotFound} />
        </Switch>
    </>
  );
}

export default App;