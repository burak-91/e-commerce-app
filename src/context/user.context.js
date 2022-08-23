import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocument } from '../firebase/firebase';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const actionType ={
    SET_CURRENT_USER:'SET_CURRENT_USER'
}

const userReducer = (state,action) =>{
   const { type, payload } = action;
    
    switch (type) {
        case actionType.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }


}
const INITIAL_STATE = {
    currentUser: null
}


export const UserProvider = ({children}) =>{
    const [state, dispatch] = useReducer(userReducer,INITIAL_STATE)
    const {currentUser} = state
    const setCurrentUser = (user) =>{
        dispatch({type: actionType.SET_CURRENT_USER, payload:user })
    }
    
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


