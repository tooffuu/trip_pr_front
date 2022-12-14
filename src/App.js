import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/main/Home";
import Login from "./components/sign/Login";
import SignUp from "./components/sign/SignUp";
import Profile from "./components/mypage/Profile";
import CheckPw from "./components/mypage/CheckPw";
import FindId from "./components/sign/FindId";
import FindPw from "./components/sign/FindPw";
import WritePhoto from "./components/board/WritePhoto";
import Photography from "./components/board/photography/Photography";
import DetailPhoto from "./components/board/photography/DetailPhoto";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "./utils/env";
import MyReview from "./components/mypage/MyReview";
import ShareRoute from "./components/board/shareRoute/ShareRoute";

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
        <Route path={"/myprofile"} exact>
          <Profile />
        </Route>
        <Route path={"/myReview"} exact>
          <MyReview />
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
        <Route path={"/photo/write"} exact>
          <WritePhoto />
        </Route>
        <Route path={"/photo/write/:postId"} exact>
          <WritePhoto />
        </Route>
        <Route path={"/photo/:postId"} exact>
          <DetailPhoto />
        </Route>
        <Route path={"/route"} exact>
          <ShareRoute />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
