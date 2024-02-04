import React from "react";

const InboxContext = React.createContext({
    mailList: [],
    setMailList: () => {},
})

export default InboxContext;