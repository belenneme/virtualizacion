import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VerPosts from "../pages/VerPosts";
import Error404 from '../pages/Error404'
import LandingPage from '../pages/LandingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/posts" component={VerPosts} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
