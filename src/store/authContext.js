import { createContext } from "react";

const AuthContext = createContext({
    idToken: null,
    email: null,
    addIdToken: () => {},
    addEmail: () => {},
    removeCred: () => {},
});

export default AuthContext;