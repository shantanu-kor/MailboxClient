import React from "react";

import { ListGroup, Badge, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import InboxContext from "../store/inbox-context";

import fetchMail from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { inboxActions } from "../store/inboxSlice";

const InboxList = () => {
  const dispatch = useDispatch();

  const mails = useSelector(state => state.inbox.mails);

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
      `${process.env.REACT_APP_DATABASE_URL}/received${email}/${id}.json`,
      {
        method: "DELETE",
      }
    );
    const data = await fetchMail(email, "received");
    dispatch(inboxActions.setInbox(data));
  };

  const unreadBadge = (read) => {
    if (!read) {
      return (
        <Badge pill variant="primary">
          Unread
        </Badge>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Inbox</h2>
      <Container>
        <ListGroup style={{ textAlign: "center" }}>
          {mails.map((item) => {
            try {
              return (
                <ListGroup.Item key={item[0]}>
                  <NavLink
                    style={{ textDecoration: "inherit" }}
                    to={`inbox/${item[0]}`}
                  >
                    <ListGroup>
                      <ListGroup.Item variant="primary">
                        {unreadBadge(item[1].read)} From: {item[1].from}
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

export default InboxList;
