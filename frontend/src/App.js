import React from "react";
import { Switch, Route } from "react-router-dom";
import Hero from "./store/components/Hero/HeroIndex";
import Navigation from "./store/components/Navigation";
import NotFound from "./store/components/NotFound/NotFoundIndex";
import AnimalIndex from "./store/components/Animal/AnimalIndex";
import AnimalShow from "./store/components/Animal/AnimalShow";
import ProfilePage from "./store/components/ProfilePage/ProfilePageIndex";
// import MeetAndGreetIndex from "./store/components/MeetAndGreet/MeetAndGreetIndex";
// import MeetAndGreetShow from "./store/components/MeetAndGreet/MeetAndGreetShow";

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
          {/* <Route exact path="/user/meetAndGreets" component={MeetAndGreetIndex} /> */}
          {/* <Route exact path="/user/meetAndGreets/:meetAndGreetId" component={MeetAndGreetShow} /> */}
          {/* <Route exact path="/user/meetAndGreets/:meetAndGreetId/edit" component={MeetAndGreetEditForm} /> */}
          <Route exact path="/animals/:animalId" component={AnimalShow} />
          <Route component={NotFound} />
        </Switch>
    </>
  );
}

export default App;