import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import NavBar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";
import HomePage from "./containers/HomePage/HomePage";
import CharactersPage from "./containers/CharactersPage/CharactersPage";
import LocationPage from "./containers/LocationPage/LocationPage";
import "./App.css";

const app = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="MainContent">
        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>
          <Route exact path={appRoutes.aboutme}>
            <CharactersPage />
          </Route>
          <Route exact path={appRoutes.locations}>
            <LocationPage />
          </Route>
          <Redirect to={appRoutes.home} />
        </Switch>
      </div>
    </div>
  );
};

export default app;
