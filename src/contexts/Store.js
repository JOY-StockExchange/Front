import { createContext } from "react";

export const AuthContext = createContext({
    auth: false,
    user_num: undefined,
    login: () => {},
    logout: () => {}
})