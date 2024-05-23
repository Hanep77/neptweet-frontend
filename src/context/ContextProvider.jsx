import { createContext, useState } from "react";

export const StateContext = createContext({
    currentUser: {},
    setCurrentUser: () => { },
    userToken: null,
    setUserToken: () => { },
    activeDropdown: null,
    setActiveDropdown: () => { }
})

export default function ContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN'))
    const [activeDropdown, setActiveDropdown] = useState(null)

    function setUserToken(token) {
        if (token) {
            localStorage.setItem("TOKEN", token)
        } else {
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token)
    }

    return (
        <StateContext.Provider value={{ currentUser, setCurrentUser, userToken, setUserToken, activeDropdown, setActiveDropdown }}>
            {children}
        </StateContext.Provider>
    )
}