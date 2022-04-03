//createContext  - provide context- usecontext
import { createContext,useContext,useReducer } from "react";
import {productListReducerFunc} from "../functions/product-list-reducer.js";

const productListingContext = createContext()

const ProductListingProvider = ({children}) => {
    const [state,dispatch] = useReducer(productListReducerFunc,{
        rating:0,
        sortBy:"",
        categoryFilterBy:{
            rings:false,
            bangles:false,
            necklace:false,
            earrings:false,
            pendants:false
        },
        price:25000,
    })
    return(
        <productListingContext.Provider value={{state,dispatch}}>
            {children}
        </productListingContext.Provider>
    )
}
 
const useProductListing =() => useContext(productListingContext)

export {ProductListingProvider,useProductListing}