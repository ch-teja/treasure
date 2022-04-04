
const cartReducerFunc = (state, action) => {
    switch (action.type) {
      case "ADD-TO-CART":
        return {
          ...state,
          cartItems: state.cartItems + 1,
          cartList: [...state.cartList, {...action.value,cartQuantity:1}],
          price:state.price + action.value.originalPrice,
          discount: state.discount + (action.value.originalPrice - action.value.price),
          totalPrice: state.totalPrice + action.value.price,
        };

      case "REMOVE-FROM-CART":
        return {
          ...state,
          cartItems: state.cartItems - action.value.cartQuantity,
          cartList: [...state.cartList].filter(
            (item) => item !== action.value
          ),
          price:state.price - (action.value.cartQuantity * action.value.originalPrice) ,
          discount:state.discount - (action.value.cartQuantity * (action.value.originalPrice - action.value.price)),
          totalPrice:state.totalPrice - (action.value.cartQuantity * action.value.price),
        };
      case "INCREASE-QUANTITY":
          return{
              ...state,
              cartItems:state.cartItems + 1,
              cartList : state.cartList.map((item) => item._id === action.value._id ?
              {...item,cartQuantity:item.cartQuantity+1} :
              item
              ),
              price:state.price + action.value.originalPrice ,
              discount:state.discount + (action.value.originalPrice - action.value.price),
              totalPrice:state.totalPrice + action.value.price,
          }
        case "DECREASE-QUANTITY":
            return{
                ...state,
                cartItems:state.cartItems - 1,
                cartList : state.cartList.map((item) => (item._id === action.value._id && item.cartQuantity > 1) ?
                {...item,cartQuantity:item.cartQuantity-1} :
                item
                ),
                price:state.price - action.value.originalPrice ,
                discount:state.discount - (action.value.originalPrice - action.value.price),
                totalPrice:state.totalPrice - action.value.price,
        }
      default:
        return state;
    }
  };

  export {cartReducerFunc}