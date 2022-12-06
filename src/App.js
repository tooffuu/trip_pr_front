import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/main/Home";
import Login from "./components/sign/Login";
import SignUp from "./components/sign/SignUp";
import SignUser from "./components/sign/SignUser";
import Profile from "./components/mypage/Profile";
import CheckPw from "./components/mypage/CheckPw";
import FindId from "./components/sign/FindId";
import FindPw from "./components/sign/FindPw";
import WritePhoto from "./components/board/WritePhoto";
import Photography from "./components/board/photography/Photography";
import DetailPhoto from "./components/board/photography/DetailPhoto";

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
        <Route path={"/photo/write"} exact>
          <WritePhoto />
        </Route>
        <Route path={"/photo/:postId"} exact>
          <DetailPhoto />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
