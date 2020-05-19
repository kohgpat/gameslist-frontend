import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FlashMessageProvider } from "./contexts/FlashMessage";
import FlashMessage from "./components/FlashMessage";
import Index from "./pages/Index";
import Players from "./pages/Players";
import Games from "./pages/Games";
import NewGame from "./pages/NewGame";
import Rating from "./pages/Rating";

function App() {
  return (
    <FlashMessageProvider>
      <FlashMessage />

      <BrowserRouter>
        <Switch>
          <Route path="/new-game">
            <NewGame />
          </Route>

          <Route path="/players">
            <Players />
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
    </FlashMessageProvider>
  );
}

export default App;
