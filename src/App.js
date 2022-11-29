import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useRecoilState } from "recoil";
import Home from "./components/main/Home";
import Login from "./components/sign/Login";
import SignUp from "./components/sign/SignUp";
import SignUser from "./components/sign/SignUser";
import Profile from "./components/mypage/Profile";
import CheckPw from "./components/mypage/CheckPw";
import FindId from "./components/sign/FindId";
import FindPw from "./components/sign/FindPw";
import axios from "axios";
import { BACKEND_URL } from "./utils/env";
import { userState } from "./recoil";
import Photography from "./components/board/Photography";

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
        <Route path={"/selectRole"} exact>
          <SignUser />
        </Route>
        <Route path={"/myprofile"} exact>
          <Profile />
        </Route>
        <Route path={"/checkpw"} exact>
          <CheckPw />
        </Route>
        <Route path={"/findid"} exact>
          <FindId />
        </Route>
        <Route path={"/findpw"} exact>
          <FindPw />
        </Route>
        <Route path={"/photo"} exact>
          <Photography />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
