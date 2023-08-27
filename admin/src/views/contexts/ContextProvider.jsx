import {createContext, useContext, useState} from "react";

const StateContext =  createContext({
    user: null,
    token: null,
    toast: {
        message: null,
        show: false
    },
    setUser: () => {},
    setToken: () => {},
})

export const ContextProvider = ({children}) => {
    const [ user, setUser ] = useState({})
    const [ token, _setToken ] = useState(localStorage.getItem('ACCESS_TOKEN'))

    const [ toast, setToast ] = useState({message: '', show: false})

    const showToast = (message) => {
        setToast({message, show: true})
        setTimeout(() =>{
            setToast({message: '', show: false})
        }, 5000)
    }

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            toast,
            showToast
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
