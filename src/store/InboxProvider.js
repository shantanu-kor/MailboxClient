import React, { useState } from "react";

import InboxContext from "./inboxContext";

const InboxProvider = (props) => {
  const [mails, setMails] = useState([]);

  const setMailsHandler = (mailList) => {
    setMails(mailList);
  };

  const inboxProvider = {
    mailList: mails,
    setMailList: setMailsHandler,
  };

  return (
    <InboxContext.Provider value={inboxProvider}>
      {props.children}
    </InboxContext.Provider>
  );
};

export default InboxProvider;
