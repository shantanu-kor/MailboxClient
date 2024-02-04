import React, { useState } from "react";

import SentContext from "./sentContext";

const SentProvider = (props) => {
  const [mails, setMails] = useState([]);

  const setMailsHandler = (mailList) => {
    setMails(mailList);
  };

  const sentProvider = {
    mailList: mails,
    setMailList: setMailsHandler,
  };

  return (
    <SentContext.Provider value={sentProvider}>
      {props.children}
    </SentContext.Provider>
  );
};

export default SentProvider;
