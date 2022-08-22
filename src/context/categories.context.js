import { createContext,useState, useEffect } from "react";
import {getCategoriesAndDocuments} from "../firebase/firebase.js";


export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => null
});

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        const getCategories = async () => {
            const categoryMaP = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMaP);
        }
        getCategories();
    },[]);

    return(
        <CategoriesContext.Provider value={{categoriesMap,setCategoriesMap}}>
            {children}
        </CategoriesContext.Provider>
    )
} 