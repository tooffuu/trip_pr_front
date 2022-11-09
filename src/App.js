import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/main/Home";
import Login from "./components/sign/Login";
import SignUp from "./components/sign/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/login"} exact>
          <Login />
        </Route>
        <Route path={"/signup"} exact>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
