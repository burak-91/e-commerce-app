import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocument } from '../firebase/firebase';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});



export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);

   
    useEffect(() => {
        const observer = async () =>{
            const unscubscribe = await onAuthStateChangedListener((user) => {
                if(user){
                    createUserDocument(user);
                }
                setCurrentUser(user);
            })
            return unscubscribe;
        }
        observer();
    },[]);


    return(
        <UserContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
} 