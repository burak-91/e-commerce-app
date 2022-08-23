import { createContext, useReducer } from "react";

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
    
   


    return(
        <UserContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
} 


