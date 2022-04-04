import { createContext,useContext,useReducer } from "react";
import { cartReducerFunc } from "../functions/cart-reducer.js";
const cartContext = createContext()

const CartProvider = ({children}) =>
{
    const [cartState, cartDispatch] = useReducer(cartReducerFunc, {
        cartItems: 0,
        price: 0,
        cartList: [],
        discount:0,
        totalPrice:0,
      });
   
    return(
        <cartContext.Provider value={{cartState, cartDispatch}}>
            {children}
        </cartContext.Provider>
    )
}

const useCart = () => useContext(cartContext)
export {CartProvider,useCart}