import React, { useContext, useEffect } from "react";
import "./App.css";
import AuthPage from "./pages/Authentication";
import AuthContext from "./store/authContext";
import HomePage from "./pages/Home";
import { Button } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import Name from "./components/Name";

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("actualEmail")) {
      authCtx.addIdToken(localStorage.getItem("token"));
      authCtx.addEmail(localStorage.getItem("actualEmail"));
    }
  }, [authCtx]);

  const logoutHandler = () => {
    authCtx.removeCred();
  };

  return (
    <React.Fragment>
      <div className="position-absolute top-0 end-0">
        {authCtx.idToken && <Button onClick={logoutHandler}>Logout</Button>}
      </div>
      <Switch>
        <Route path="/test">
          <Name />
        </Route>
        <Route path="/">{authCtx.idToken ? <HomePage /> : <AuthPage />}</Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
