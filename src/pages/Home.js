import React, { useContext } from "react";
import NavBar from "../components/Navigation";

import { Redirect, Route, Switch } from "react-router-dom";
import ComposeEmail from "../components/ComposeMail";

// import InboxContext from "../store/inbox-context";
// import SentContext from "../store/sent-context";
import AuthContext from "../store/authContext";

import InboxList from "../components/InboxList";
import InboxMail from "../components/InboxMail";
import SentList from "../components/SentList";
import SentMail from "../components/SentMail";

import { Col, Container, Row } from "react-bootstrap";
import useCheckMails from "../hooks/useCheckMails";


const HomePage = () => {
  const authCtx = useContext(AuthContext);

  useCheckMails();
  
  return (
    <React.Fragment>
      <h1>Welcome to your Mail Box!</h1>
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
          <Col xxl={10}>
            <Switch>
              <Route path="/composeMail">
                {authCtx.idToken ? <ComposeEmail /> : <Redirect to="/" />}
              </Route>
              <Route path="/inbox" exact>
                {authCtx.idToken ? <InboxList /> : <Redirect to="/" />}
              </Route>
              <Route path="/inbox/:mailId">
                {authCtx.idToken ? <InboxMail /> : <Redirect to="/" />}
              </Route>
              <Route path="/sent" exact>
                {authCtx.idToken ? <SentList /> : <Redirect to="/" />}
              </Route>
              <Route path="/sent/:mailId">
                {authCtx.idToken ? <SentMail /> : <Redirect to="/" />}
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
