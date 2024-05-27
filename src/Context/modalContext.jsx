import { createContext, useContext, useState } from "react";

const ShowLoginModal = createContext()

export const LoginModalContext = ({children}) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <ShowLoginModal.Provider value={{showModal, setShowModal}}>
            {children}
        </ShowLoginModal.Provider>
    )
}

export const useLoginModalContext = () => {
    const context = useContext(ShowLoginModal)

    if (!context) {
        throw new Error('Context must be used within Provider')
    }

    return context
}