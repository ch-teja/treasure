const wishListReducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD-TO-WISHLIST":
      return {
        ...state,
        wishList: [...state.wishList, action.value],
        wishListItems: state.wishListItems + 1,
      };
    case "REMOVE-FROM-WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item._id !== action.value._id
        ),
        wishListItems: state.wishListItems - 1,
      };

    default:
      return state;
  }
};
export { wishListReducerFunc };
