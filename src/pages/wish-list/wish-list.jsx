import { useWishList } from "../../context/wish-list-context";
import { Link } from "react-router-dom";
import "./wish-list.css";
import { useCart } from "../../context/cart-context";

const WishList = () => {
  const { wishListDispatch, wishListState } = useWishList();
  const { cartDispatch } = useCart();
  const wishList = wishListState.wishList;
  return wishList.lenght === 0 ? (
    <div className="center-text">
      <h2>Wish-list is empty</h2>
      <button className="btn filled-gold-btn">
        <Link to="/productlist" className="no-decoration color-white">
          Start Shopping
        </Link>
      </button>
    </div>
  ) : (
    <div class="wishlist-page">
      {wishList.map((pro) => (
        <div className="card" key={pro._id}>
          <img className="card-img" src={pro.image} alt="card_image" />
          <div className="card-info">
            <div className="title">
              <h3>{pro.name}</h3>
              <p className="desc">{pro.subText}</p>
            </div>
            <div className="price">
              Rs.{pro.price} <s className="price-off">Rs.{pro.originalPrice}</s>
            </div>
            <div>
              <button
                className="btn filled-gold-btn btn-width-100"
                onClick={(e) => {
                  cartDispatch({ type: "ADD-TO-CART", value: pro });
                  wishListDispatch({
                    type: "REMOVE-FROM-WISHLIST",
                    value: pro,
                  });
                }}
              >
                Move to cart <i className="fa fa-shopping-cart"></i>
              </button>

              <button
                className="btn outline-gold-btn btn-width-100"
                onClick={(e) => {
                  wishListDispatch({
                    type: "REMOVE-FROM-WISHLIST",
                    value: pro,
                  });
                }}
              >
                Remove from <i className="fa fa-heart-o"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export { WishList };
