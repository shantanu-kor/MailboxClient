import React from "react";

const SentContext = React.createContext({
    mailList: [],
    setMailList: () => {},
})

export default SentContext;