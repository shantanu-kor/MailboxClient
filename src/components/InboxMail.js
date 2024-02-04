import React from "react";

import { Container, ListGroup } from "react-bootstrap";

import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, EditorState } from "draft-js";

import { Link, useParams } from "react-router-dom";

// import InboxContext from "../store/inbox-context";
import { useSelector } from "react-redux";

const InboxMail = () => {
  const params = useParams();

  const mails = useSelector(state => state.inbox.mails);

  const mail = mails.filter((item) => item[0] === params.mailId)[0];

  // useEffect(() => {
    if (mail[1].read === false) {
      const email = localStorage.getItem("email");
      fetch(
        `${process.env.REACT_APP_DATABASE_URL}/received${email}/${mail[0]}.json`,
        {
          method: "PUT",
          body: JSON.stringify({ ...mail[1], read: true }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  // }, [mail]);

  const editorStateHandler = (content) => {
    const itemContent = JSON.parse(content);
    const contentState = convertFromRaw(itemContent);
    return EditorState.createWithContent(contentState);
  };

  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>From: {mail[1].from}</ListGroup.Item>
        <ListGroup.Item>Subject: {mail[1].header}</ListGroup.Item>
        <ListGroup.Item>
          <Editor
            toolbarHidden
            editorState={editorStateHandler(mail[1].content)}
            readOnly={true}
          />
        </ListGroup.Item>
      </ListGroup>
      <div style={{ textAlign: "center" }}>
        <Link to="/inbox">Back to Inbox</Link>
      </div>
    </Container>
  );
};

export default InboxMail;
