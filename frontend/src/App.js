import React from "react";
import { Switch, Route } from "react-router-dom";
// import LoginFormPage from "./store/components/LoginFormPage";
// import LoginFormModal from "./store/components/LoginFormModal";
import SignupFormPage from "./store/components/SignupFormPage";
import Navigation from "./store/components/Navigation";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;