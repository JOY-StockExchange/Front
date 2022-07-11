import { createContext } from "react";

export const AuthContext = createContext({
    auth: true,
    user_num: undefined,
    login: () => {},
    logout: () => {}
})