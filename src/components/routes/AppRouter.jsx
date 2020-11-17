import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Admin } from "../Admin/Admin";
import { Login } from "../Admin/Login";
import { Home } from "../Home";

function AppRouter() {
  return (
    <Router>
      <Switch>
        
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
