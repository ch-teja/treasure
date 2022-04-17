import { useCart } from "../../context/cart-context.js";
import { useWishList } from "../../context/wish-list-context.js";
import "./cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishListDispatch } = useWishList();
  const cartList = cartState.cartList;
  const discount = cartState.discount;
  const totalPrice = cartState.totalPrice;
  return (
    <div>
      <h2 className="head-center">My Cart({cartState.cartItems})</h2>
      {cartState.cartItems === 0 ? (
        <div className="center-text">
          <h2>Cart is empty</h2>
          <button className="btn filled-gold-btn">
            <Link to="/productlist" className="no-decoration color-white">
              Start Shopping
            </Link>
          </button>
        </div>
      ) : (
        <div class="cart-page">
          <div className="cart-items">
            {cartList.map((pro) => (
              <div className="card-horizontal cart-card" key={pro._id}>
                <img className="card-img" src={pro.image} alt="card_image" />
                <div className="card-info">
                  <div className="title">
                    <h3>{pro.name}</h3>
                    <p className="desc">{pro.subText}</p>
                  </div>
                  <div className="price">
                    Rs.{pro.price}{" "}
                    <s className="price-off">Rs.{pro.originalPrice}</s>
                  </div>
                  <p className="quantity">
                    Quantity:
                    {pro.cartQuantity > 1 && (
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          cartDispatch({
                            type: "DECREASE-QUANTITY",
                            value: pro,
                          })
                        }
                      >
                        <b>-</b>
                      </button>
                    )}
                    <button className="quantity-val">{pro.cartQuantity}</button>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        cartDispatch({ type: "INCREASE-QUANTITY", value: pro })
                      }
                    >
                      <b>+</b>
                    </button>
                  </p>
                  <button
                    className="btn outline-gold-btn"
                    onClick={() =>
                      cartDispatch({ type: "REMOVE-FROM-CART", value: pro })
                    }
                  >
                    Remove
                  </button>
                  <button
                    className="btn filled-gold-btn"
                    onClick={() => {
                      wishListDispatch({ type: "ADD-TO-WISHLIST", value: pro });
                      cartDispatch({ type: "REMOVE-FROM-CART", value: pro });
                    }}
                  >
                    Move to wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="price-details">
            <div className="card-only-text-price">
              <div className="card-info">
                <h3>PRICE DETAILS</h3>
                <hr />
                <div className="flex-sp-btw">
                  <p>Price({cartState.cartItems} items)</p>
                  <p>Rs.{cartState.price}</p>
                </div>
                <div className="flex-sp-btw">
                  <p>Discount</p>
                  <p>
                    <b>-</b>Rs.{discount}
                  </p>
                </div>
                <div className="flex-sp-btw">
                  <p>Delivery Charges</p>
                  <p>Rs.200</p>
                </div>
                <hr />
                <div className="flex-sp-btw">
                  <h4>Total Amount</h4>
                  <h4>Rs.{totalPrice + 200}</h4>
                </div>
                <hr />
                <p>You save Rs.{discount} on this order</p>
                <button className="btn margin-top filled-gold-btn">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Cart };
