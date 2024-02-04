import React from "react";

import { ListGroup, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import SentContext from "../store/sent-context";

import fetchMail from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { sentActions } from "../store/sentSlice";

const SentList = () => {
  const dispatch = useDispatch();

  const mails = useSelector(state => state.sent.mails);

  // useEffect(() => {
  //   const setInboxFn = async () => {
  //     const email = localStorage.getItem("email");
  //     const res = await fetch(
  //       `https://mailbox-client-7b1e9-default-rtdb.asia-southeast1.firebasedatabase.app/received${email}.json`
  //     );
  //     let data = await res.json();
  //     try {
  //       data = Array.from(Object.entries(data));
  //     } catch {
  //       data = [];
  //     }
  //     inboxCtx.setMailList(data);
  //   };
  //   setInboxFn();
  // }, [inboxCtx]);

  const deleteMailHandler = async (id) => {
    const email = localStorage.getItem("email");
    await fetch(
      `${process.env.REACT_APP_DATABASE_URL}/sent${email}/${id}.json`,
      {
        method: "DELETE",
      }
    );
    const data = await fetchMail(email, "sent");
    dispatch(sentActions.setSent(data));
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Sent</h2>
      <Container>
        <ListGroup style={{ textAlign: "center" }}>
          {mails.map((item) => {
            try {
              return (
                <ListGroup.Item key={item[0]}>
                  <NavLink
                    style={{ textDecoration: "inherit" }}
                    to={`sent/${item[0]}`}
                  >
                    <ListGroup>
                      <ListGroup.Item variant="primary">
                        To:{" "}
                        {item[1].to.map((item) => (
                          <span>{item} </span>
                        ))}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Subject: {item[1].header}{" "}
                      </ListGroup.Item>
                    </ListGroup>
                  </NavLink>
                  <ListGroup.Item>
                    <Button
                      className="position-relative end-0"
                      onClick={deleteMailHandler.bind(null, item[0])}
                    >
                      Delete
                    </Button>
                  </ListGroup.Item>
                </ListGroup.Item>
              );
            } catch {
              return <li></li>;
            }
          })}
        </ListGroup>
      </Container>
    </>
  );
};

export default SentList;
