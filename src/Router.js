import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./pages/Index";
import Players from "./pages/Players";
import PlayersShow from "./pages/PlayersShow";
import Games from "./pages/Games";
import GamesShow from "./pages/GamesShow";
import NewGame from "./pages/NewGame";
import Rating from "./pages/Rating";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-game">
          <NewGame />
        </Route>

        <Route path="/players/:id">
          <PlayersShow />
        </Route>

        <Route path="/players">
          <Players />
        </Route>

        <Route path="/games/:id">
          <GamesShow />
        </Route>

        <Route path="/games">
          <Games />
        </Route>

        <Route path="/rating">
          <Rating />
        </Route>

        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
