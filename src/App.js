import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import SignIn from "../src/componets/Authentication/SignIn";
import SignUp from "../src/componets/Authentication/SignUp";
import Feeds from "../src/componets/FeedsPage/Feeds";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/feeds" component={Feeds} />
          {/* <Route path="/feed/:feedId" component={Feed} />
          <Route path="/user/:userId" component={User} />
          <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
