import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./components/main/Home";
import Login from "./components/sign/Login";
import SignUp from "./components/sign/SignUp";
import SignUser from "./components/sign/SignUser";

function App() {
  return (
    <RecoilRoot>
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
          <Route path={"/selectRole"} exact>
            <SignUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
