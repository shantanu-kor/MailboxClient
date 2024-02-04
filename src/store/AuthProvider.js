import React, { useState } from "react";

import AuthContext from "./authContext";

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const addIdTokenHandler = (id) => {
    localStorage.setItem("token", id);
    setToken(localStorage.getItem("token"));
  };

  const addEmailHandler = (e_mail) => {
    localStorage.setItem("actualEmail", e_mail);
    let email = e_mail;
    let semail = email.split('.');
    email = ''
    for (let i of semail) {
        email += i
    }
    semail = email.split('@');
    email = ''
    for (let i of semail) {
        email += i
    }
    localStorage.setItem("email", email);
    setEmail(localStorage.getItem("email"));
  };

  const removeCredHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("actualEmail");
    setToken(localStorage.getItem("token"));
    setEmail(localStorage.getItem("email"));
  };

  const authProvider = {
    idToken: token,
    email: email,
    addIdToken: addIdTokenHandler,
    addEmail: addEmailHandler,
    removeCred: removeCredHandler,
  };

  return (
    <AuthContext.Provider value={authProvider}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
