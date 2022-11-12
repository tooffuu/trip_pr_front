import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./components/main/Home";
import Login from "./components/sign/Login";
import SignUp from "./components/sign/SignUp";
import SignUser from "./components/sign/SignUser";
import Profile from "./components/mypage/Profile";
import CheckPw from "./components/mypage/CheckPw";

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
          <Route path={"/myprofile"} exact>
            <Profile />
          </Route>
          <Route path={"/checkpw"} exact>
            <CheckPw />
          </Route>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
