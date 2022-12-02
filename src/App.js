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
import Photography from "./components/board/Photography";
import WritePhoto from "./components/board/WritePhoto";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
