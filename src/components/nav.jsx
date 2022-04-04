import {Link} from "react-router-dom";
import "./nav.css";
import {useCart} from "../context/cart-context.js"
const Nav = () =>
{
    const {cartState} = useCart()
    const cartItems = cartState.cartItems
    return(
        <nav className="basic-navbar">
        <div className="nav-brand"><h2><Link to="/home" className="no-decoration color-black-light">Treasure</Link></h2></div>
        <div className="nav-search">
            <input type="text" className="nav-search fa" placeholder="&#xf002; search something" />
        </div>
        <ul className="list-non-bullet nav-part2">
            <li className="nav-item list-item-inline"><button className="nav-button"><Link to="/login" className="no-decoration color-white">Login</Link></button></li>
            <li className="nav-item list-item-inline"><Link to="/wishlist" className="no-decoration color-black-light">
                    <span className="badge-on-icon">
                        <i className="fa fa-heart icon icon-outline"></i>
                        <span className="icon-badge">10</span>
                    </span></Link>
            </li>
            <li class="nav-item list-item-inline"><Link to="/cart" className="no-decoration color-black-light">
                    <span className="badge-on-icon">
                        <i className="fa fa-shopping-cart icon icon-outline"></i>
                        <span className="icon-badge">{cartItems}</span>
                    </span></Link>
            </li>
        </ul>
    </nav>
    )
}

export {Nav}