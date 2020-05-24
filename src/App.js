import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage";
import ContactPage from "./pages/contact-page";
import B2BPage from "./pages/b2b-page";
import ExtensionDevelopmentPage from "./pages/extension-development-page";
import EcommercePage from "./pages/ecommerce-page";
import Down2comPage from "./pages/down2com-page";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/b2b" component={B2BPage} />
        <Route
          path="/extension-development"
          component={ExtensionDevelopmentPage}
        />
        <Route path="/ecommerce" component={EcommercePage} />
        <Route path="/down2com" component={Down2comPage} />
      </Switch>
    </div>
  );
};

export default App;
