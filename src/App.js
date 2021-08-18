import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
