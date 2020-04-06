import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import FoodForm from "./pages/FoodForm";
import App from "./App";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/food/new" exact component={FoodForm} />
      <Route path="/food/:id" exact component={FoodForm} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}
