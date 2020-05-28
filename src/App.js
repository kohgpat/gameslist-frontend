import React from "react";
import { FlashMessageProvider } from "./contexts/FlashMessage";
import FlashMessage from "./components/FlashMessage";
import Router from "./Router";

function App() {
  return (
    <FlashMessageProvider>
      <FlashMessage />
      <Router />
    </FlashMessageProvider>
  );
}

export default App;
