import React, { useState } from "react";

import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const AuthPage = () => {
  const [login, setLogin] = useState(false);

  const loginHandler = () => {
    setLogin(true);
  };

  const signupHandler = () => {
    setLogin(false);
  };

  return (
    <React.Fragment>
      <Redirect to="/" />
      {login ? (
        <React.Fragment>
          <LogIn />
          <div className="my-2" style={{ textAlign: "center" }}>
            <Button variant="dark" onClick={signupHandler}>
              Don't have an account? Sign up
            </Button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <SignUp />
          <div className="my-2" style={{ textAlign: "center" }}>
            <Button variant="dark" onClick={loginHandler}>
              Already an user? Login
            </Button>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AuthPage;
