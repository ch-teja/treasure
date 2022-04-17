import { useReducer, createContext, useContext } from "react";
import { wishListReducerFunc } from "../functions/wish-list-reducer";

const wishListContext = createContext();
const WishListProvider = ({ children }) => {
  const [wishListState, wishListDispatch] = useReducer(wishListReducerFunc, {
    wishList: [],
    wishListItems: 0,
  });

  return (
    <wishListContext.Provider value={{ wishListState, wishListDispatch }}>
      {children}
    </wishListContext.Provider>
  );
};

const useWishList = () => useContext(wishListContext);
export { WishListProvider, useWishList };
