import { actionTypes } from "./actionTypes";
import { getCategoriesAndDocuments } from "../../firebase/firebase";

const fetchCategoriesStart = () =>({type: actionTypes.FETCH_CATEGORIES_START})
const fetchCategoriesSuccess = (categories) =>({type:actionTypes.FETCH_CATEGORIES_SUCCESS, payload:categories})
const fetchCategoriesFailed = (error) => ({type:actionTypes.FETCH_CATEGORIES_FAILED,payload:error})

export const fetchCategoriesAsync = () => async (dispatch) =>{
    dispatch(fetchCategoriesStart())
    try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
}

