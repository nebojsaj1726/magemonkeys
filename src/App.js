import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage";
import ContactPage from "./pages/contact-page";
import B2BPage from "./pages/b2b-page";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/b2b" component={B2BPage} />
      </Switch>
    </div>
  );
};

export default App;
