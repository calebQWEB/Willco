import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../Config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const CreateMessageContext = createContext()

export const MessageContext = ({children}) => {
    const [messages, setMessages] = useState(null)

    const messageCollectionRef = collection(db, "Messages");

    useEffect(() => {
        const getMessage = async () => {
            try {
                const data = await getDocs(messageCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                }))
                setMessages(filteredData)
            } catch(error) {
                console.log(error)
            }
        }

        getMessage()
    }, [])

    return (
        <CreateMessageContext.Provider value={{messages }}>
            {children}
        </CreateMessageContext.Provider>
    )
}

export const useMessageContext = () => {
    const context = useContext(CreateMessageContext)

    if (!context) {
        throw new Error("Context must be used within Provider")
    } 

    return context
}