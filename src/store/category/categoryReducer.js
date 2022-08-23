import { actionTypes } from "./actionTypes";

const INITIAL_STATE = {
    categoriesMap:{}
}


export const categoryReducer = (state=INITIAL_STATE,action) =>{
        const {type, payload} = action;
        switch (type) {
            case actionTypes.SET_CATEGORIES_MAP:
                return{
                    ...state,
                    categoriesMap:payload
                }
            default:
                return state;
        }
}