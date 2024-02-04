import React from "react";

import { Container, ListGroup } from "react-bootstrap";

import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, EditorState } from "draft-js";

import { Link, useParams } from "react-router-dom";

// import SentContext from "../store/sent-context";
import { useSelector } from "react-redux";

const SentMail = () => {
  const params = useParams();

  const mails = useSelector(state => state.sent.mails);

  const mail = mails.filter((item) => item[0] === params.mailId)[0];

  const editorStateHandler = (content) => {
    const itemContent = JSON.parse(content);
    const contentState = convertFromRaw(itemContent);
    return EditorState.createWithContent(contentState);
  };

  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>
          To:{" "}
          {mail[1].to.map((item) => (
            <span>{item} </span>
          ))}
        </ListGroup.Item>
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
        <Link to="/sent">Back to Sent</Link>
      </div>
    </Container>
  );
};

export default SentMail;
