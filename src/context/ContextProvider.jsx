import { createContext, useState } from "react";

export const StateContext = createContext({
    currentUser: {},
    setCurrentUser: () => { },
    userToken: null,
    setUserToken: () => { }
})

export default function ContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN'))

    function setUserToken(token) {
        if (token) {
            localStorage.setItem("TOKEN", token)
        } else {
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token)
    }

    return (
        <StateContext.Provider value={{ currentUser, setCurrentUser, userToken, setUserToken }}>
            {children}
        </StateContext.Provider>
    )
}