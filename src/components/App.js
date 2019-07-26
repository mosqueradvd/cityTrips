import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import BadgeNew from "../pages/BadgeNew";
import BadgeDetails from "../pages/BadgeDetailsContainer";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgesId/" component={BadgeDetails} />
          <Route exact path="/badges/:badgesId/edit" component={BadgeEdit} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;