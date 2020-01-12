import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Login } from "./login/Login";
import { SignIn } from "./signin/Signin";
import { ToastProvider } from "react-toast-notifications";
import Cookies from "js-cookie";
import { Dashboard } from "./dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      {Cookies.get("user") && <Redirect to="/dashboard" />}
      <ToastProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </ToastProvider>
    </Router>
  );
};

export default App;
